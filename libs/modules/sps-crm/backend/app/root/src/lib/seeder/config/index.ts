import { IModuleSeedConfig } from "@sps/shared-backend-api";
import { models } from "@sps/sps-crm/backend/models/root";
import { configModels as parentConfigModels } from "./startup";

export const config: IModuleSeedConfig<typeof models> = {
  seed: process.env["SPS_CRM_SEED"] === "true",
  models: parentConfigModels,
};
