import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-slide-contracts";
import { spsLiteEntity as file } from "@sps/sps-file-storage-file-contracts";
import { spsLiteEntity as buttonEntity } from "@sps/sps-website-builder-button-contracts";
import type { IModel } from "../interfaces/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  media: [file],
  buttons: [{ ...buttonEntity }],
};
