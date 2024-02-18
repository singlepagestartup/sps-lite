import type { IModel } from "../interfaces";
import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-footer-contracts";
import { spsLiteEntity as pageBlock } from "@sps/sps-website-builder-footer-block-contracts";

export const entity: IModel = {
  ...parentEntity,
  pageBlocks: [{ ...pageBlock }],
};
