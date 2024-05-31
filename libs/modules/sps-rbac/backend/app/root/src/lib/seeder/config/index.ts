import { IModuleSeedConfig } from "@sps/shared-backend-api";
import { models } from "@sps/sps-rbac-backend-models";
import { configModels as parentConfigModels } from "./startup";

export const config: IModuleSeedConfig<typeof models> = {
  seed: process.env["SPS_RBAC_SEED"] === "true",
  models: parentConfigModels,
};
