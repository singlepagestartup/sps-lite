import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-models-logotype-contracts";
import type { IModel } from "../interfaces/sps-lite";
import { spsLiteEntity as file } from "@sps/sps-file-storage-models-file-contracts";

export const entity: IModel = {
  ...parentEntity,
  media: [file],
  additionalMedia: [file],
};
