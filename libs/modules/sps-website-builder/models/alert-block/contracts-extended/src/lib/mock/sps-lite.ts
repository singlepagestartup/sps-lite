import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-alert-block-contracts";
import { spsLiteEntity as button } from "@sps/sps-website-builder-button-contracts";
import { entity as file } from "@sps/sps-file-storage-contracts/lib/models/file/mock/sps-lite";
import type { IModel } from "../interfaces";

export const entity: IModel = {
  ...parentEntity,
  buttons: [{ ...button }],
  media: [file],
  additionalMedia: [file],
};
