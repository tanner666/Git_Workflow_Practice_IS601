//test for creating a homepage user story
const { test, expect } = require('@playwright/test');

test('Website has correct title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await page.goto('http://localhost:3000'); // replace with your website's URL
  const title = await page.title();
  expect(title).toBe('MyWebClass.org');
});
