import { When, Then, Given } from "@cucumber/cucumber";
import { steps } from "../../../../../utils/elements/steps";

Given("I am RestAPI client", steps["I am RestAPI client"]);

When("I request {string} {string}", steps["I request {string} {string}"]);

When(
  "I request {string} {string} with the following body:",
  steps["I request {string} {string} with the following body:"],
);

When(
  "I request {string} {string} with the following body and catch an error:",
  steps[
    "I request {string} {string} with the following body and catch an error:"
  ],
);

Then(
  "I recieve JSON data with field {string} having type {string}",
  steps["I recieve JSON data with field {string} having type {string}"],
);

Then(
  "I recieve JSON data with field {string} equals {string}",
  steps["I recieve JSON data with field {string} equals {string}"],
);

Then(
  "I recieve JSON error data with field {string} having type {string}",
  steps["I recieve JSON error data with field {string} having type {string}"],
);

Then(
  "I recieve JSON error data with field {string} equals {string}",
  steps["I recieve JSON error data with field {string} equals {string}"],
);

When("debug {string}", steps["debug {string}"]);

When(
  "save request to world.cache {string}",
  steps["save request to world.cache {string}"],
);

Then("sleep {string}", steps["sleep {string}"]);

When(
  "I fill in the following details:",
  steps["I fill in the following details:"],
);

Given("I am a dashboard admin user", steps["I am a dashboard admin user"]);
