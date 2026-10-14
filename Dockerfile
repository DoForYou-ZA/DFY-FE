FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# Bundle the staging APK into the website so mobile users download it from
# the DoForYou domain instead of being navigated to GitHub.
RUN mkdir -p public/downloads \
    && wget --https-only --tries=3 --timeout=30 \
      -O public/downloads/dfy-mobile.apk \
      https://github.com/DoForYou-ZA/dfy-mobile/releases/download/mobile-staging-latest/dfy-mobile.apk \
    && test -s public/downloads/dfy-mobile.apk

ARG VITE_API_URL
ARG VITE_SIGNALR_URL
ARG VITE_APP_NAME=DoForYou
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_SIGNALR_URL=$VITE_SIGNALR_URL
ENV VITE_APP_NAME=$VITE_APP_NAME
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
