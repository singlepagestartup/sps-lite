import { expect } from "@playwright/test";
import { pathReplacer, replaceValue } from "../../utils";
import { ApiClient } from "../ApiClient";
import { User } from "../User";
import { World } from "../World";
const R = require("ramda");

export const steps = {
  "I am a guest user": async function (this: World) {
    const user = new User();
    this.users?.push(user);
    this.me = user;

    await user.openBrowser();
  },
  "I am on {string} page": async function (this: World, url: string) {
    const pageUrl = replaceValue({ world: this, value: url });

    if (!this.me) {
      throw new Error("No user");
    }

    if (this.me instanceof User) {
      await this.me.goTo(pageUrl);
    }
  },
  "I can read {string} text": async function (this: World, message: string) {
    if (!this.me) {
      throw new Error("No user");
    }
    if (this.me instanceof User) {
      await this.me.readText({ text: message });
    }
  },
  "I click {string} button": async function (this: World, string: string) {
    if (!this.me) {
      throw new Error("No user");
    }

    if (this.me instanceof User) {
      await this.me.clickButton({ title: string });
    }
  },
  "I should be redirected to the {string} page": async function (
    this: World,
    url: string,
  ) {
    if (!this.me) {
      throw new Error("No user");
    }

    if (this.me instanceof User) {
      await this.me.checkRoute({ route: url });
    }
  },
  "I press key {string}": async function (this: World, key: string) {
    if (!this.me) {
      throw new Error("No user");
    }

    if (this.me instanceof User) {
      this.me?.pressKey({ key });
    }
  },
  debug: async function (this: World) {
    console.log("👾 ~ debug ~ this:", JSON.stringify(this, null, 2));
  },
  "I am RestAPI client": async function (this: World) {
    const apiClient = new ApiClient();
    this.apiClients?.push(apiClient);
    this.me = apiClient;

    // await ApiClient.openBrowser();
  },
  "I request {string} {string}": async function (
    this: World,
    method: string,
    url: string,
  ) {
    const pageUrl = replaceValue({ world: this, value: url });

    if (!this.me) {
      throw new Error("No user");
    }

    if (this.me instanceof ApiClient) {
      const response = await this.me.request({ method, url: pageUrl });
    }
    // console.log("🚀 ~ response:", response);
  },
  "I request {string} {string} with the following body:": async function (
    this: World,
    method: string,
    url: string,
    dataTable: any,
  ) {
    let body = {};

    for (const row of dataTable.hashes() as any[]) {
      const value = replaceValue({ world: this, value: row.value });
      const field = replaceValue({ world: this, value: row.field });
      const path = field.split(".");

      body = R.assocPath(path, value, body);
    }

    const pageUrl = replaceValue({ world: this, value: url });

    if (!this.me) {
      throw new Error("No user");
    }

    if (this.me instanceof ApiClient) {
      await this.me.request({ method, url: pageUrl, data: body });
    }
  },
  "I request {string} {string} with the following body and catch an error:":
    async function (this: World, method: string, url: string, dataTable: any) {
      let body = {};

      for (const row of dataTable.hashes() as any[]) {
        const value = replaceValue({ world: this, value: row.value });
        const field = replaceValue({ world: this, value: row.field });
        const path = field.split(".");

        body = R.assocPath(path, value, body);
      }

      const pageUrl = replaceValue({ world: this, value: url });

      if (!this.me) {
        throw new Error("No user");
      }

      let requestError;
      try {
        if (this.me instanceof ApiClient) {
          await this.me.request({ method, url: pageUrl, data: body });
        }
      } catch (error) {
        requestError = error;
        console.log(
          "~ that test catchs an error:",
          JSON.stringify(error, null, 2),
        );
      }

      expect(requestError).toBeDefined();
    },
  "I recieve JSON data with field {string} having type {string}":
    async function (this: World, path: string, type: string) {
      if (!this.me) {
        throw new Error("No user");
      }

      const result = pathReplacer({
        parent: this.me.lastRequest.response,
        path,
      });

      expect(typeof result).toEqual(type);
    },
  "I recieve JSON data with field {string} equals {string}": async function (
    this: World,
    path: string,
    value: string,
  ) {
    const expectedValue = replaceValue({ world: this, value });

    if (!this.me) {
      throw new Error("No user");
    }

    const result = pathReplacer({
      parent: this.me.lastRequest.response,
      path,
    });

    expect(result).toEqual(expectedValue);
  },
  "I recieve JSON error data with field {string} having type {string}":
    async function (this: World, path: string, type: string) {
      if (!this.me) {
        throw new Error("No user");
      }

      const result = pathReplacer({
        parent: this.me.lastRequest.response,
        path,
      });

      expect(typeof result).toEqual(type);
    },
  "I recieve JSON error data with field {string} equals {string}":
    async function (this: World, path: string, value: string) {
      const expectedValue = replaceValue({ world: this, value });

      if (!this.me) {
        throw new Error("No user");
      }

      const result = pathReplacer({
        parent: this.me.lastRequest.response,
        path,
      });

      expect(result).toEqual(expectedValue);
    },
  "debug {string}": async function (this: World, path: string) {
    const sanitizedPath = path.replace(/__/g, "").replace("world.", "");
    console.log("🚀 ~ sanitizedPath:", sanitizedPath);
    const value = pathReplacer({ parent: this, path: sanitizedPath });

    console.log("👾 ~ debug ~ value:", JSON.stringify(value, null, 2));
  },
  "save request to world.cache {string}": async function (
    this: World,
    path: string,
  ) {
    if (!this.me) {
      throw new Error("No user");
    }

    const value = this.me.lastRequest;

    this.cache = R.assocPath(path.split("."), value, this.cache);
  },
  "sleep {string}": async function (this: World, timeout: string) {
    const ms = parseInt(timeout);
    await new Promise((resolve) => setTimeout(resolve, ms));
  },
  "I fill in the following details:": async function (
    this: World,
    dataTable: any,
  ) {
    if (!this.me) {
      throw new Error("No user");
    }

    for (const row of dataTable.hashes() as any[]) {
      const value = replaceValue({ world: this, value: row.value });
      const locator = replaceValue({
        world: this,
        value: row.locator,
        type: row.type,
      });

      if (this.me instanceof User) {
        await this.me.fillInput({
          locator,
          value,
          type: row.type,
        });
      }
    }
  },
  "I am a dashboard admin user": async function (this: World) {
    const user = new User();
    this.users?.push(user);
    this.me = user;

    await user.openBrowser();
    await user.loginToDashboard();
  },
};
