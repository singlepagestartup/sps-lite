import type { IModel } from "../interfaces";
import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/models/button/mock/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  flyout: null,
};
