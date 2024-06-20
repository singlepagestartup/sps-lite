import { IModuleSeedConfig } from "@sps/shared-backend-api";
import { models } from "@sps/sps-notification/backend/models/root";
import { configModels as parentConfigModels } from "./sps-lite";

export const configModels: IModuleSeedConfig<typeof models>["models"] = [
  ...parentConfigModels,
];
