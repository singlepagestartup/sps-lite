import { replaceValue } from "../../utils";
import { User } from "../User";
import { World } from "./World";

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

    await this.me.goTo(pageUrl);
  },
  "I can read {string} text": async function (this: World, message: string) {
    if (!this.me) {
      throw new Error("No user");
    }

    await this.me.readText({ text: message });
  },
  "I click {string} button": async function (this: World, string: string) {
    if (!this.me) {
      throw new Error("No user");
    }

    await this.me.clickButton({ title: string });
  },
  "I should be redirected to the {string} page": async function (
    this: World,
    url: string,
  ) {
    if (!this.me) {
      throw new Error("No user");
    }

    await this.me.checkRoute({ route: url });
  },
  "I press key {string}": async function (this: World, key: string) {
    if (!this.me) {
      throw new Error("No user");
    }

    this.me?.pressKey({ key });
  },
  debug: async function (this: World) {
    console.log("👾 ~ debug ~ this:", JSON.stringify(this, null, 2));
  },
};
