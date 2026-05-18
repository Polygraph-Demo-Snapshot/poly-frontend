import { test, expect } from '@playwright/test';
import { setupApiMocks } from './fixtures/api-mocks';

test.beforeEach(async ({ page }) => {
  await setupApiMocks(page);
});

test('loads catalog and opens a product detail page', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('PolyShopping');
  await expect(page.getByTestId('navbar-title')).toContainText('PolyShopping');
  await expect(page.locator('h2').first()).toContainText('Featured Products');

  const productGrid = page.getByTestId('product-grid');
  await expect(productGrid).toBeVisible();
  await expect(productGrid.locator('> div')).toHaveCount(8);

  await productGrid.locator('a').first().click();

  await expect(page).toHaveURL(/\/product\/\d+$/);
  await expect(page.getByTestId('product-detail')).toBeVisible();
  await expect(page.getByTestId('product-name')).toContainText(
    'Wireless Headphones'
  );
});

