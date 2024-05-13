import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-models-header-section-block-contracts";
import { spsLiteEntity as file } from "@sps/sps-file-storage-models-file-contracts";
import type { IModel } from "../interfaces/sps-lite";

export const entity = {
  ...parentEntity,
  media: [file],
  additionalMedia: [file],
};
