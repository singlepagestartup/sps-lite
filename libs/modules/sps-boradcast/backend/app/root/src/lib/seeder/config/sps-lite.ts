import { IModuleSeedConfig } from "@sps/shared-backend-api";
import { models } from "@sps/sps-boradcast/backend/models/root";

export const configModels: IModuleSeedConfig<typeof models>["models"] = [
  {
    name: "channel",
  },
];
