import { entity as parentEntity } from "@sps/sps-crm-contracts/lib/models/review/mock/sps-lite";
import type { IModel } from "../interfaces/sps-lite";
import { entity as file } from "@sps/sps-file-storage-contracts/lib/models/file/mock/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  media: [file],
  additionalMedia: [file],
};
