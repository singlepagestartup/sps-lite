import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-navbar-block-contracts";
import { spsLiteEntity as logotype } from "@sps/sps-website-builder-logotype-contracts";
import { spsLiteEntity as button } from "@sps/sps-website-builder-button-contracts";
import type { IModel } from "../interfaces";

export const entity: IModel = {
  ...parentEntity,
  logotype: logotype,
  buttons: [button, button],
  additionalButtons: [button],
  extraButtons: [button],
};
