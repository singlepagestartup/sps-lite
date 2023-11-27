import { replaceValue } from "../../../../utils/utils";
import { User } from "../../../../utils/identites/User";
import { ICustomWorld } from "../../../bdd-utils/custom-world";

const { When, Then, Given } = require("@cucumber/cucumber");

Given("I'm a guest user", async function () {});

When(
  "I am on the {string} page",
  async function (this: ICustomWorld, url: string) {
    const pageUrl = replaceValue({ world: this, value: url });

    if (!this.user) {
      const user = new User({ page: this.page! });
      this.user = user;
    }

    await this.user.goTo(pageUrl);
  },
);

Then(
  "text {string} should be shown",
  async function (this: ICustomWorld, message: string) {
    await this.user?.readText({ text: message });
  },
);
