import { IModuleSeedConfig } from "@sps/shared-backend-api";
import { models } from "@sps/sps-rbac/backend/models/root";

export const configModels: IModuleSeedConfig<typeof models>["models"] = [];
