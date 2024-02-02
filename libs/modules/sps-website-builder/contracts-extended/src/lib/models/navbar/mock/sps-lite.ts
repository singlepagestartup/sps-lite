import type { IModel } from "../interfaces/sps-lite";
import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/models/navbar/mock/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  pageBlocks: null,
};
