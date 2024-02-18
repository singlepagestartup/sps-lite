import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-incentives-block-contracts";
import { spsLiteEntity as feature } from "@sps/sps-website-builder-feature-contracts";
import { entity as file } from "@sps/sps-file-storage-contracts/lib/models/file/mock/sps-lite";
import type { IModel } from "../interfaces/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  features: Array(4).fill(feature),
  media: [file],
  additionalMedia: [file],
};
