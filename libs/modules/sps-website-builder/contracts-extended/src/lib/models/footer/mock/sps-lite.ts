import type { IModel } from "../interfaces";
import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/models/footer/mock/sps-lite";
import { entity as pageBlock } from "@sps/sps-website-builder-contracts/lib/models/footer-block/mock/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  pageBlocks: [{ ...pageBlock }],
};
