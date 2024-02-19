import { spsLiteEntity as parentEntity } from "@sps/sps-crm-review-contracts";
import type { IModel } from "../interfaces/sps-lite";
import { spsLiteEntity as file } from "@sps/sps-file-storage-file-contracts";

export const entity: IModel = {
  ...parentEntity,
  media: [file],
  additionalMedia: [file],
};
