import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/models/navbar-block/mock/sps-lite";
import { entity as logotype } from "@sps/sps-website-builder-contracts/lib/models/logotype/mock/sps-lite";
import { spsLiteEntity as button } from "@sps/sps-website-builder-button-contracts";
import type { IModel } from "../interfaces";

export const entity: IModel = {
  ...parentEntity,
  logotype: logotype,
  buttons: [button, button],
  additionalButtons: [button],
  extraButtons: [button],
};
