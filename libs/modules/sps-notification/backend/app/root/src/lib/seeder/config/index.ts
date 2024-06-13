import { IModuleSeedConfig } from "@sps/shared-backend-api";
import { models } from "@sps/sps-notification-backend-models";
import { configModels as parentConfigModels } from "./startup";

export const config: IModuleSeedConfig<typeof models> = {
  seed: process.env["SPS_NOTIFICATION_SEED"] === "true",
  models: parentConfigModels,
};
