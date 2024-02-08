import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/models/not-found-block/mock/sps-lite";
import { entity as button } from "@sps/sps-website-builder-contracts/lib/models/button/mock/sps-lite";
import { entity as file } from "@sps/sps-file-storage-contracts/lib/models/file/mock/sps-lite";
import type { IModel } from "../interfaces/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  buttons: Array(1).fill(button),
  media: [file],
  additionalMedia: [file],
};
