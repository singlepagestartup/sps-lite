import { expect, Page } from "@playwright/test";

export interface IUser {}

export class User {
  readonly page: Page;
  registered = false;

  constructor({ page }: { page: Page; random?: boolean }) {
    this.page = page;
  }

  async fillInput({
    locator,
    value,
    type = "text",
  }: {
    locator: string;
    value: string;
    type?: "text" | "checkbox";
  }) {
    if (type === "checkbox") {
      if (value === "checked") {
        await this.page.locator(locator).click();
      }

      return;
    }

    await this.page.locator(locator).fill(value);
  }

  async goTo(url: string) {
    await this.page.goto(url);
  }

  async clickButton({ title }: { title: string }) {
    await this.page.getByText(title, { exact: true }).first().click();
  }

  async checkRoute({ route }: { route: string }) {
    await this.page.waitForURL(route);
  }

  async readText({ text }: { text: string }) {
    await expect(this.page.getByText(text, { exact: true })).toBeVisible();
  }
}
