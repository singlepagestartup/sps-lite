import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-models-incentives-block-contracts";
import { spsLiteEntity as feature } from "@sps/sps-website-builder-models-feature-contracts";
import { spsLiteEntity as file } from "@sps/sps-file-storage-models-file-contracts";
import type { IModel } from "../interfaces/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  features: Array(4).fill(feature),
  media: [file],
  additionalMedia: [file],
};
