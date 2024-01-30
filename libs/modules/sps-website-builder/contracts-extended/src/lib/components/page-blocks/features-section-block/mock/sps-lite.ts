import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/features-section-block/mock/sps-lite";
import { entity as feature } from "@sps/sps-website-builder-contracts/lib/components/elements/feature/mock/sps-lite";
import { entity as file } from "@sps/sps-file-storage-contracts/lib/entities/file/mock/sps-lite";
import type { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  ...parentEntity,
  features: Array(4).fill(feature),
  media: [file],
  additionalMedia: [file],
};
