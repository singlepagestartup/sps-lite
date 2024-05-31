import { IModuleSeedConfig } from "@sps/shared-backend-api";
import { models } from "@sps/sps-file-storage-backend-models";

export const configModels: IModuleSeedConfig<typeof models>["models"] = [
  { name: "file" },
  { name: "widget" },
];
