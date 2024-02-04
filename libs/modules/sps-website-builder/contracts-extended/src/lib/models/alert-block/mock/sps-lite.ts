import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/models/alert-block/mock/sps-lite";
import { entity as button } from "@sps/sps-elements-contracts/lib/models/button/mock/sps-lite";
import { entity as file } from "@sps/sps-file-storage-contracts/lib/models/file/mock/sps-lite";
import type { IModel } from "../interfaces";

export const entity: IModel = {
  ...parentEntity,
  buttons: [{ ...button }],
  media: [file],
  additionalMedia: [file],
};
