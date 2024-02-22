import type { IModel } from "../interfaces";
import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-models-button-contracts";

export const entity: IModel = {
  ...parentEntity,
  flyout: null,
};
