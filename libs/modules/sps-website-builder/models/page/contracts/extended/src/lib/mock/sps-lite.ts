import type { IModel } from "../interfaces/sps-lite";
import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-models-page-contracts";
import { spsLiteEntity as pageBlock } from "@sps/sps-website-builder-models-hero-section-block-contracts";

export const entity: IModel = {
  ...parentEntity,
  pageBlocks: [{ ...pageBlock }],
};
