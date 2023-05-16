import { test, expect, type Page } from "@playwright/test";

test.skip("Required field validation", async ({ page }) => {
  await page.getByRole("textbox").first().click();

  await page.getByRole("textbox").first().fill("Tester");

  await page.getByRole("button", { name: "Submit" }).click({ timeout: 2000 });

  //   const emailField = await page.getByText(`Электронная почта`);
  const errorBlock = await page.locator(".inputs__error").first();

  await expect(errorBlock).toContainText("Required");
});
