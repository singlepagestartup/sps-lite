import { test, expect } from "@playwright/test";
import { User } from "tests/utils/elements/User";

test("Main page loads", async ({ page }) => {
  const user = new User({ page });

  await user.goTo("/");

  if (!user.page) {
    throw new Error("Page not found");
  }

  await expect(
    user.page.getByText(
      "Jumpstart Your Lean Startup with Developer-Friendly Boilerplate",
    ),
  ).toBeVisible();
});
