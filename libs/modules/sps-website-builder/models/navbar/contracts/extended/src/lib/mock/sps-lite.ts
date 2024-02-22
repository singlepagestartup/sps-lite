import type { IModel } from "../interfaces/sps-lite";
import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-models-navbar-contracts";

export const entity: IModel = {
  ...parentEntity,
  pageBlocks: null,
};
