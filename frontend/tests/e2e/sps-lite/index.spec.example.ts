import { test } from "@playwright/test";

test("Simple test example", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.getByRole("heading", {
    name: "Jumpstart Your Lean Startup with Developer-Friendly Boilerplate",
  });
});
