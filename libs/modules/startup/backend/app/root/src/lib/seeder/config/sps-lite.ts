import { IModuleSeedConfig } from "@sps/shared-backend-api";
import { models } from "@sps/startup-backend-models";

export const configModels: IModuleSeedConfig<typeof models>["models"] = [
  { name: "widget" },
];
