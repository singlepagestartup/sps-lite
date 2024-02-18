import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-header-section-block-contracts";
import { entity as file } from "@sps/sps-file-storage-contracts/lib/models/file/mock/sps-lite";
import type { IModel } from "../interfaces/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  media: [file],
  additionalMedia: [file],
};
