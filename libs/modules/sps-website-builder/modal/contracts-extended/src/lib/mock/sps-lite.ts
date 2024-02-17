import type { IModel } from "../interfaces/sps-lite";
import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-modal-contracts";
import { spsLiteEntity as pageBlock } from "@sps/sps-website-builder-button-contracts";

export const entity: IModel = {
  ...parentEntity,
  pageBlocks: [{ ...pageBlock }],
};
