import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/not-found-block/mock/sps-lite";
import { entity as button } from "@sps/sps-website-builder-contracts/lib/components/elements/button/mock/sps-lite";
import { entity as file } from "@sps/sps-file-storage-contracts/lib/entities/file/mock/sps-lite";
import type { IComponent } from "../interfaces/sps-lite";

export const entity: IComponent = {
  ...parentEntity,
  buttons: Array(1).fill(button),
  media: [file],
  additionalMedia: [file],
};
