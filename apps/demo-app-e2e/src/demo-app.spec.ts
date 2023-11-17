import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('title contains ngx-bsn', async ({ page }) => {
  await expect(page.locator('h1')).toHaveText('ngx-bsn');
});

test('should contain 4 sections', async ({ page }) => {
  await expect(page.locator('section')).toHaveCount(4);
});

test('should be a valid BSN', async ({ page }) => {
  const iban = page.locator('input');
  await iban.fill('111222333');
  await expect(iban).toHaveClass(/ng-valid/);
});

test('should be an invalid BSN', async ({ page }) => {
  const iban = page.locator('input');
  await iban.fill('111222334');
  await expect(iban).toHaveClass(/ng-invalid/);
});
