import type { IModel } from "../interfaces/sps-lite";
import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/models/slide-over/mock/sps-lite";
import { spsLiteEntity as pageBlock } from "@sps/sps-website-builder-hero-section-block-contracts";

export const entity: IModel = {
  ...parentEntity,
  pageBlocks: [{ ...pageBlock }],
};
