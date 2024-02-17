import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-cta-section-block-contracts";
import { spsLiteEntity as button } from "@sps/sps-website-builder-button-contracts";
import { entity as file } from "@sps/sps-file-storage-contracts/lib/models/file/mock/sps-lite";
import type { IModel } from "../interfaces";

export const entity: IModel = {
  ...parentEntity,
  buttons: Array(3).fill(button),
  media: [file],
  additionalMedia: [file],
};
