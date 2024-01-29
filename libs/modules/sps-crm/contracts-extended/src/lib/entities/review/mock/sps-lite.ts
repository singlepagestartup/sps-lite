import { entity as parentEntity } from "@sps/sps-crm-contracts/lib/entities/review/mock/sps-lite";
import type { IEntity } from "../interfaces/sps-lite";
import { entity as file } from "@sps/sps-file-storage-contracts/lib/entities/file/mock/sps-lite";

export const entity: IEntity = {
  ...parentEntity,
  media: [file],
  additionalMedia: [file],
};
