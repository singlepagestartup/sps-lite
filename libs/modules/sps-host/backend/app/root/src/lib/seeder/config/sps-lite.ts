import { IModuleSeedConfig } from "@sps/shared-backend-api";
import { models } from "@sps/sps-host-backend-models";

export const configModels: IModuleSeedConfig<typeof models>["models"] = [
  {
    name: "layout",
  },
  {
    name: "page",
  },
  {
    name: "widget",
  },
  {
    name: "metadata",
  },
];
