import { test, expect } from "@playwright/test";

test("Main page loads", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByText(
      "Jumpstart Your Lean Startup with Developer-Friendly Boilerplate",
    ),
  ).toBeVisible();
});
