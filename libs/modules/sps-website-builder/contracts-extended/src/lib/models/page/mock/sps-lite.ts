import type { IModel } from "../interfaces/sps-lite";
import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/models/page/mock/sps-lite";
import { spsEntity as pageBlock } from "@sps/sps-website-builder-hero-section-block-contracts";

export const entity: IModel = {
  ...parentEntity,
  pageBlocks: [{ ...pageBlock }],
};
