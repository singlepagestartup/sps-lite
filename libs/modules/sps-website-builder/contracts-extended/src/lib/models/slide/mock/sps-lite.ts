import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/models/slide/mock/sps-lite";
import { entity as fileEntity } from "@sps/sps-file-storage-contracts/lib/models/file/mock/sps-lite";
import { entity as buttonEntity } from "@sps/sps-website-builder-contracts/lib/models/button/mock/sps-lite";
import type { IModel } from "../interfaces/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  media: [fileEntity],
  buttons: [{ ...buttonEntity }],
};
