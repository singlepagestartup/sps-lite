import { When, Then, Given } from "@cucumber/cucumber";
import { steps } from "../../../../../utils/elements/steps";

Given("I am a guest user", steps["I am a guest user"]);

When("I am on {string} page", steps["I am on {string} page"]);

Then("I can read {string} text", steps["I can read {string} text"]);

When("I click {string} button", steps["I click {string} button"]);

Then(
  "I should be redirected to the {string} page",
  steps["I should be redirected to the {string} page"],
);

Given("I press key {string}", steps["I press key {string}"]);

When("debug", steps["debug"]);
