import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/components/elements/feature/mock/sps-lite";
import { entity as fileEntity } from "@sps/sps-file-storage-contracts/lib/entities/file/mock/sps-lite";
import type { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  ...parentEntity,
  media: [fileEntity],
};
