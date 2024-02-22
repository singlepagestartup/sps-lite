import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-models-not-found-block-contracts";
import { spsLiteEntity as button } from "@sps/sps-website-builder-models-button-contracts";
import { spsLiteEntity as file } from "@sps/sps-file-storage-models-file-contracts";
import type { IModel } from "../interfaces/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  buttons: Array(1).fill(button),
  media: [file],
  additionalMedia: [file],
};
