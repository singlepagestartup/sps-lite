import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-models-buttons-array-contracts";
import { spsLiteEntity as button } from "@sps/sps-website-builder-models-button-contracts";
import type { IModel } from "../interfaces/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  buttons: [button, button],
};
