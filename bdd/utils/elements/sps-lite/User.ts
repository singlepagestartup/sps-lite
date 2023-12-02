import { expect, Page } from "@playwright/test";
import { ITestCaseHookParameter } from "@cucumber/cucumber/lib/support_code_library_builder/types";
import { Browser } from "./Browser";

export class User {
  page?: Page;
  type: string;
  browser?: Browser;
  registered = false;
  lastRequest?: any;

  constructor(props?: { page?: Page }) {
    this.page = props?.page;
    this.type = "public";
  }

  async openBrowser() {
    if (this.page) {
      return;
    }

    this.browser = new Browser();
    await this.browser.open();
    this.page = this.browser.pages[0];
  }

  async closeBrowser({
    hookParameter,
  }: {
    hookParameter?: ITestCaseHookParameter;
  }) {
    await this.browser?.close({ hookParameter });
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
    if (!this.page) {
      return;
    }

    if (type === "checkbox") {
      if (value === "checked") {
        await this.page.locator(locator).click();
      }

      return;
    }

    await this.page.locator(locator).fill(value);
  }

  async pressKey({ key }: { key: string }) {
    if (!this.page) {
      return;
    }

    await this.page.keyboard.press(key);
  }

  async goTo(url: string) {
    if (!this.page) {
      return;
    }

    await this.page.goto(url);
  }

  async clickButton({ title }: { title: string }) {
    if (!this.page) {
      return;
    }

    await this.page.getByText(title, { exact: true }).first().click();
  }

  async checkRoute({ route }: { route: string }) {
    if (!this.page) {
      return;
    }

    await this.page.waitForURL(route);
  }

  async readText({ text }: { text: string }) {
    if (!this.page) {
      return;
    }

    await expect(this.page.getByText(text, { exact: true })).toBeVisible({
      timeout: 20000,
    });
  }
}
