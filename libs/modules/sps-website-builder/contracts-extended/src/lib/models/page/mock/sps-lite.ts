import type { IModel } from "../interfaces/sps-lite";
import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/models/page/mock/sps-lite";
import { entity as pageBlock } from "@sps/sps-website-builder-contracts/lib/models/hero-section-block/mock/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  pageBlocks: [{ ...pageBlock }],
};
