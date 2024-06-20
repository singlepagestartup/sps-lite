import { IModuleSeedConfig } from "@sps/shared-backend-api";
import { models } from "@sps/sps-third-parties/backend/models/root";
import { configModels as parentConfigModels } from "./startup";

export const config: IModuleSeedConfig<typeof models> = {
  seed: process.env["SPS_THIRD_PARTIES_SEED"] === "true",
  models: parentConfigModels,
};
