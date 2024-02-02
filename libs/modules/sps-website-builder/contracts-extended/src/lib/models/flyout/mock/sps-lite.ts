import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/entities/flyout/mock/sps-lite";
import { entity as pageBlock } from "@sps/sps-website-builder-contracts/lib/models/hero-section-block/mock/sps-lite";
import { IEntity } from "../interfaces";

export const entity: IEntity = {
  ...parentEntity,
  pageBlocks: [{ ...pageBlock }],
};
