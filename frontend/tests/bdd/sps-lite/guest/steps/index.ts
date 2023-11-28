import { replaceValue } from "../../../../utils/utils";
import { User } from "../../../../utils/elements/User";
import { When, Then, Given } from "@cucumber/cucumber";
import { World } from "../../../../utils/elements/World";

Given("I am a guest user", async function (this: World) {
  const user = new User();
  this.users?.push(user);
  this.me = user;

  await user.openBrowser();
});

When("I am on {string} page", async function (this: World, url: string) {
  const pageUrl = replaceValue({ world: this, value: url });

  if (!this.me) {
    throw new Error("No user");
  }

  await this.me.goTo(pageUrl);
});

Then("I can read {string} text", async function (this: World, message: string) {
  if (!this.me) {
    throw new Error("No user");
  }

  await this.me.readText({ text: message });
});

When("I click {string} button", async function (this: World, string: string) {
  if (!this.me) {
    throw new Error("No user");
  }

  await this.me.clickButton({ title: string });
});

Then(
  "I should be redirected to the {string} page",
  async function (this: World, url: string) {
    if (!this.me) {
      throw new Error("No user");
    }

    await this.me.checkRoute({ route: url });
  },
);
