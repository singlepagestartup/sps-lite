import type { IModel } from "../interfaces/sps-lite";
import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/models/metatag/mock/sps-lite";
import { entity as fileEntity } from "@sps/sps-file-storage-contracts/lib/models/file/mock/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  favicon: fileEntity,
};
