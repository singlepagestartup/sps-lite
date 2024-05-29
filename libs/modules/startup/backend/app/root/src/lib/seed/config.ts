import { IModuleSeedConfig } from "@sps/shared-backend-api";
import { models } from "@sps/startup-backend-models";

export const config: IModuleSeedConfig<typeof models> = {
  seed: process.env["STARTUP_SEED"] === "true",
  models: [{ name: "widget" }],
};
