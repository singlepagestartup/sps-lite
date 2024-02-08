import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/models/flyout/mock/sps-lite";
import type { IModel } from "../interfaces";

export const entity: IModel = {
  ...parentEntity,
  pageBlocks: null,
};
