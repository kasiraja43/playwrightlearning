import { test, expect, } from "@playwright/test";

test("Amazon Search", async ({ page }) => {
  await page.goto("https://www.amazon.com");
  await page.fill("#twotabsearchtextbox", "Playwright");
  await page.click("#nav-search-submit-button");
  await expect(page).toHaveURL(/search/);
});
