import { test, expect } from '@playwright/test'

test.describe('public marketing experience', () => {
  test('homepage exposes essential SEO metadata and a clear task-marketplace message', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/DoForYou.*Get It Done/i)
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      /South Africa's task marketplace/
    )
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      'content',
      /DoForYou/
    )
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/get it done/i)
    await expect(page.getByRole('link', { name: /browse tasks/i, exact: true }).first()).toBeVisible()
    await expect(page.getByRole('button', { name: 'Post a Task', exact: true })).toBeVisible()
  })

  test('skip navigation reaches the main content landmark', async ({ page }) => {
    await page.goto('/')
    const skipLink = page.getByRole('link', { name: /skip to main content/i })
    await expect(skipLink).toBeAttached()
    await skipLink.focus()
    await expect(skipLink).toBeFocused()
    await expect(page.locator('#main-content')).toHaveAttribute('tabindex', '-1')
  })

  test('intro video does not autoplay or eagerly download media', async ({ page }) => {
    await page.goto('/')
    const video = page.locator('.video-section video')
    await expect(video).toBeVisible()
    await expect(video).not.toHaveAttribute('autoplay', '')
    await expect(video).toHaveAttribute('preload', 'metadata')
  })

  test('homepage keeps the testimonial section and clear task journey', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: /what people say/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /a clear task journey/i })).toBeVisible()
    await expect(page.locator('.testimonials-section .testimonial-card')).toHaveCount(6)
  })

  test('public journey pages explain distinct creator, runner, and completion steps', async ({ page }) => {
    const routes = [
      { path: '/how-it-works', heading: /from “i need a hand” to “all sorted\.”/i },
      { path: '/for-creators', heading: /your to-do list deserves a team effort/i },
      { path: '/for-runners', heading: /your time has value\. put it to work/i },
      { path: '/faq', heading: /good questions deserve clear answers/i },
      { path: '/payments-and-completion', heading: /task completion and payment status/i },
    ]

    for (const route of routes) {
      await page.goto(route.path)
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(route.heading)
      await expect(page.locator('#main-content')).toBeVisible()
      await expect(page.locator('footer')).toBeVisible()
    }
  })

  test('FAQ search and topic filters narrow answers accessibly', async ({ page }) => {
    await page.goto('/faq')
    await page.getByRole('searchbox', { name: /search frequently asked questions/i }).fill('24-hour')
    await expect(page.getByText(/creator has a 24-hour confirmation period/i)).toBeVisible()
    await page.getByRole('searchbox', { name: /search frequently asked questions/i }).fill('')
    await page.getByRole('button', { name: /runners/i }).click()
    await expect(page.getByRole('heading', { name: /^runners$/i })).toBeVisible()
    await expect(page.getByText(/how do i become a runner/i)).toBeVisible()
  })

  test('footer has working links to help, payments, creators, and runners', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('contentinfo').getByRole('link', { name: /FAQs/i })).toHaveAttribute('href', '/faq')
    await expect(page.getByRole('contentinfo').getByRole('link', { name: /payments & completion/i })).toHaveAttribute('href', '/payments-and-completion')
    await expect(page.getByRole('contentinfo').getByRole('link', { name: /become a runner/i })).toHaveAttribute('href', '/for-runners')
    await expect(page.getByRole('contentinfo').getByRole('link', { name: /contact support/i })).toHaveAttribute('href', '/contact')
  })
})
