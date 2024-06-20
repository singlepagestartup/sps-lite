import { IModuleSeedConfig } from "@sps/shared-backend-api";
import { models } from "@sps/sps-rbac/backend/models/root";
import { configModels as parentConfigModels } from "./sps-lite";

export const configModels: IModuleSeedConfig<typeof models>["models"] = [
  ...parentConfigModels,
];
