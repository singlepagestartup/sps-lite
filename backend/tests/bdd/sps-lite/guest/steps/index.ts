import { pathReplacer, replaceValue } from "../../../../utils/utils";
import { Client } from "../../../../utils/elements/Client";
import { When, Then, Given } from "@cucumber/cucumber";
import { World } from "../../../../utils/elements/World";
import { expect } from "@playwright/test";
const R = require("ramda");

Given("I am RestAPI client", async function (this: World) {
  const client = new Client();
  this.clients?.push(client);
  this.me = client;

  // await client.openBrowser();
});

When(
  "I request {string} {string}",
  async function (this: World, method: string, url: string) {
    const pageUrl = replaceValue({ world: this, value: url });

    if (!this.me) {
      throw new Error("No user");
    }

    const response = await this.me.request({ method, url: pageUrl });
    // console.log("🚀 ~ response:", response);
  },
);

When(
  "I request {string} {string} with the following body:",
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

    await this.me.request({ method, url: pageUrl, data: body });
  },
);

When(
  "I request {string} {string} with the following body and catch an error:",
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
      await this.me.request({ method, url: pageUrl, data: body });
    } catch (error) {
      requestError = error;
      console.log(
        "~ that test catchs an error:",
        JSON.stringify(error, null, 2),
      );
    }

    expect(requestError).toBeDefined();
  },
);

Then(
  "I recieve JSON data with field {string} having type {string}",
  async function (this: World, path: string, type: string) {
    if (!this.me) {
      throw new Error("No user");
    }

    const result = pathReplacer({ parent: this.me.lastRequest.response, path });

    expect(typeof result).toEqual(type);
  },
);

Then(
  "I recieve JSON data with field {string} equals {string}",
  async function (this: World, path: string, value: string) {
    const expectedValue = replaceValue({ world: this, value });

    if (!this.me) {
      throw new Error("No user");
    }

    const result = pathReplacer({ parent: this.me.lastRequest.response, path });

    expect(result).toEqual(expectedValue);
  },
);

Then(
  "I recieve JSON error data with field {string} having type {string}",
  async function (this: World, path: string, type: string) {
    if (!this.me) {
      throw new Error("No user");
    }

    const result = pathReplacer({ parent: this.me.lastRequest.response, path });

    expect(typeof result).toEqual(type);
  },
);

Then(
  "I recieve JSON error data with field {string} equals {string}",
  async function (this: World, path: string, value: string) {
    const expectedValue = replaceValue({ world: this, value });

    if (!this.me) {
      throw new Error("No user");
    }

    const result = pathReplacer({ parent: this.me.lastRequest.response, path });

    expect(result).toEqual(expectedValue);
  },
);

When("debug", async function (this: World) {
  console.log("👾 ~ debug ~ this:", JSON.stringify(this, null, 2));
});

When("debug {string}", async function (this: World, path: string) {
  const sanitizedPath = path.replace(/__/g, "").replace("world.", "");
  console.log("🚀 ~ sanitizedPath:", sanitizedPath);
  const value = pathReplacer({ parent: this, path: sanitizedPath });

  console.log("👾 ~ debug ~ value:", JSON.stringify(value, null, 2));
});

When(
  "save request to world.cache {string}",
  async function (this: World, path: string) {
    if (!this.me) {
      throw new Error("No user");
    }

    const value = this.me.lastRequest;

    this.cache = R.assocPath(path.split("."), value, this.cache);
  },
);

Then("sleep {string}", async function (this: World, timeout: string) {
  const ms = parseInt(timeout);
  await new Promise((resolve) => setTimeout(resolve, ms));
});
