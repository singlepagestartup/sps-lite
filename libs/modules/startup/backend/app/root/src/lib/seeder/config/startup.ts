import { IModuleSeedConfig } from "@sps/shared-backend-api";
import { models } from "@sps/startup-backend-models";
import { configModels as parentConfigModels } from "./sps-lite";

export const configModels: IModuleSeedConfig<typeof models>["models"] = [
  ...parentConfigModels,
];
