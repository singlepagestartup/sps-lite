import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-models-flyout-contracts";
import type { IModel } from "../interfaces";

export const entity: IModel = {
  ...parentEntity,
  pageBlocks: null,
};
