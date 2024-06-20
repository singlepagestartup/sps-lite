import { IModuleSeedConfig } from "@sps/shared-backend-api";
import { models } from "@sps/startup/backend/models/root";
import { configModels as parentConfigModels } from "./startup";

export const config: IModuleSeedConfig<typeof models> = {
  seed: process.env["STARTUP_SEED"] === "true",
  models: parentConfigModels,
};
