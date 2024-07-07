import { IModuleSeedConfig } from "@sps/shared-backend-api";
import { models } from "@sps/sps-broadcast/backend/models/root";

export const configModels: IModuleSeedConfig<typeof models>["models"] = [
  {
    name: "channel",
  },
];
