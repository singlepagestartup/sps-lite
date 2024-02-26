import { expect, Page } from "@playwright/test";
import { ITestCaseHookParameter } from "@cucumber/cucumber/lib/support_code_library_builder/types";
import { Browser } from "../Browser";
import path from "path";
import { BACKEND_URL } from "../../constants";

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
    type?: "text" | "checkbox" | "options" | "strapi_file" | "strapi_combobox";
  }) {
    if (!this.page) {
      return;
    }

    if (type === "checkbox") {
      if (value === "checked") {
        await this.page.locator(locator).click();
      }

      return;
    } else if (type === "options") {
      await this.page.locator(locator).click();
      await this.page
        .locator(locator)
        .locator(".options")
        .getByText(value, { exact: true })
        .first()
        .click();
      return;
    } else if (type === "strapi_file") {
      await this.page.locator(locator).click();
      await this.page.getByRole("button", { name: "Add more assets" }).click();

      const [firstPageDocument] = await Promise.all([
        this.page.waitForEvent("filechooser"),
        this.page.locator("[name='files']").click(),
      ]);

      const files = [];

      try {
        const passedFiles = JSON.parse(value);
        if (Array.isArray(passedFiles)) {
          passedFiles.forEach((file) => {
            files.push(file);
          });
        }
      } catch (error) {
        files.push(value);
      }

      const uploadFiles = [];
      for (const file of files) {
        const filesDirectory = "../../files";
        const uploadFile = path.join(__dirname, filesDirectory, file);
        uploadFiles.push(uploadFile);
      }

      await firstPageDocument.setFiles(uploadFiles);

      const uploadButtonRegex = /Upload \d+ asset(s)? to the library/gi;
      await this.page.getByRole("button", { name: uploadButtonRegex }).click();
      await this.page.getByRole("button", { name: "Finish" }).click();

      return;
    } else if (type === "strapi_combobox") {
      const fillingElement = this.page.locator(locator).locator("input");
      await fillingElement.click();
      await this.page.keyboard.type(value);

      // Strapi has radix library, options shows at the root of the document
      await this.page
        .locator(`div[role="option"] :has( > :text-is("${value}"))`)
        .click();

      return;
    }

    const fillingElement = await this.page.locator(locator);
    await fillingElement.click();
    await this.page.keyboard.type(value);
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

    await expect(
      this.page.getByText(text, { exact: true }).first(),
    ).toBeVisible({
      timeout: 20000,
    });
  }

  async loginToDashboard() {
    if (!this.page) {
      return;
    }

    const email = process.env.STRAPI_ADMIN_LOGIN;
    const password = process.env.STRAPI_ADMIN_PASSWORD;

    await this.page.goto(`${BACKEND_URL}/admin/`);

    await this.page.waitForURL(`${BACKEND_URL}/admin/`);

    await this.page.locator("[name='email']").fill(email);
    await this.page.locator("[name='password']").fill(password);
    await this.page.locator("[name='rememberMe']").click();

    await this.page.getByRole("button", { name: "Login" }).click();
    this.page.getByText("Welcome 👋", { exact: true }).first().isVisible();
  }
}
