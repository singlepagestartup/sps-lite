import type { IModel } from "../interfaces/sps-lite";
import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-models-metatag-contracts";
import { spsLiteEntity as file } from "@sps/sps-file-storage-models-file-contracts";

export const entity = {
  ...parentEntity,
  favicon: file,
};
