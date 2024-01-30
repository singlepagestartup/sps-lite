import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/header-section-block/mock/sps-lite";
import { entity as file } from "@sps/sps-file-storage-contracts/lib/entities/file/mock/sps-lite";
import type { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  ...parentEntity,
  media: [file],
  additionalMedia: [file],
};
