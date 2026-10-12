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
    await expect(page.getByRole('link', { name: /browse tasks/i })).toBeVisible()
    await expect(page.getByRole('button', { name: /post a task/i })).toBeVisible()
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

  test('homepage no longer renders unverified customer testimonials', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: /a clear task journey/i })).toBeVisible()
    await expect(page.getByText(/what people say/i)).toHaveCount(0)
    await expect(page.getByText(/Thabo M\.|Lerato K\.|Sipho N\./)).toHaveCount(0)
  })
})
