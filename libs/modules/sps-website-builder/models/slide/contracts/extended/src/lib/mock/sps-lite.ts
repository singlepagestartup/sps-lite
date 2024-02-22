import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-models-slide-contracts";
import { spsLiteEntity as file } from "@sps/sps-file-storage-models-file-contracts";
import { spsLiteEntity as buttonEntity } from "@sps/sps-website-builder-models-button-contracts";
import type { IModel } from "../interfaces/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  media: [file],
  buttons: [{ ...buttonEntity }],
};
