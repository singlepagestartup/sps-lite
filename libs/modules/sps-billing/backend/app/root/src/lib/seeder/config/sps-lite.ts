import { IModuleSeedConfig } from "@sps/shared-backend-api";
import { models } from "@sps/sps-billing/backend/models/root";

export const configModels: IModuleSeedConfig<typeof models>["models"] = [];
