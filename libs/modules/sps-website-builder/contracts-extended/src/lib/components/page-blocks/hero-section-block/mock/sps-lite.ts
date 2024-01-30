import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/hero-section-block/mock/sps-lite";
import { entity as button } from "@sps/sps-website-builder-contracts/lib/components/elements/button/mock/sps-lite";
import { entity as file } from "@sps/sps-file-storage-contracts/lib/entities//file/mock/sps-lite";
import type { IComponent } from "../interfaces";

export const entity: IComponent = {
  ...parentEntity,
  buttons: [button],
  media: [file],
  additionalMedia: [file],
};
