import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-models-navbar-block-contracts";
import { spsLiteEntity as logotype } from "@sps/sps-website-builder-models-logotype-contracts";
import { spsLiteEntity as button } from "@sps/sps-website-builder-models-button-contracts";
import type { IModel } from "../interfaces";

export const entity: IModel = {
  ...parentEntity,
  logotype: logotype,
  buttons: [button, button],
  additionalButtons: [button],
  extraButtons: [button],
};
