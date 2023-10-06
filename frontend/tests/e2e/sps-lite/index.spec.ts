import { test, expect } from "@playwright/test";
import { FRONTEND_URL } from "~utils/envs";
import { setFile } from "../utils";

test("Main page loads", async ({ page }) => {
  await page.goto(FRONTEND_URL);

  await expect(
    await page.getByRole("heading", {
      name: "Jumpstart Your Lean Startup with Developer-Friendly Boilerplate",
    }),
  ).toBeVisible();
});

test("Form request works", async ({ page }) => {
  await page.goto(FRONTEND_URL);

  await page.getByLabel("Name").fill("Tester");
  await page.getByLabel("Email").fill("tester@example.com");
  await page.getByText("I agree with Terms and Conditions").click();

  await page.getByRole("button", { name: "Send Request" }).click();

  await expect(
    await page.getByText("Form was successfully submitted"),
  ).toBeVisible({
    timeout: 50000,
  });
});

test("Form validation works", async ({ page }) => {
  await page.goto(FRONTEND_URL);

  await page.getByText("Send Request").click();

  await expect(await page.getByText("Required field").count()).toBe(3);
});

test("Fill all form inputs works", async ({ page }) => {
  await page.goto(FRONTEND_URL);

  await page.getByLabel("Name").fill("Tester");
  await page.getByLabel("Email").fill("tester@example.com");
  await page.getByText("I agree with Terms and Conditions").click();

  await setFile({
    page: page,
    htmlNodeId: "#inputs_7__files",
    files: ["./sps-lite/project1.jpg"],
  });

  await page.getByRole("button", { name: "Send Request" }).click();

  await expect(
    await page.getByText("Form was successfully submitted"),
  ).toBeVisible({
    timeout: 50000,
  });
});
