import type { IEntity } from "../interfaces/sps-lite";
import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/entities/navbar/mock/sps-lite";
import { entity as pageBlock } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/hero-section-block/mock/sps-lite";

export const entity: IEntity = {
  ...parentEntity,
  pageBlocks: [{ ...pageBlock }],
};
