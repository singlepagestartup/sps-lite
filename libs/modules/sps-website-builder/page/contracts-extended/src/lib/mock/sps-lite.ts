import type { IModel } from "../interfaces/sps-lite";
import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-page-contracts";
import { entity as pageBlock } from "@sps/sps-website-builder-contracts/lib/models/hero-section-block/mock/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  pageBlocks: [{ ...pageBlock }],
};
