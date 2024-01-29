import type { IEntity } from "../interfaces";
import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/entities/footer/mock/sps-lite";
import { entity as pageBlock } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/footer-block/mock/sps-lite";

export const entity: IEntity = {
  ...parentEntity,
  pageBlocks: [{ ...pageBlock }],
};
