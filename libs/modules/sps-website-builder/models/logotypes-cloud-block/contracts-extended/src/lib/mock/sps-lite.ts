import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-logotypes-cloud-block-contracts";
import { spsLiteEntity as logotype } from "@sps/sps-website-builder-logotype-contracts";
import { spsLiteEntity as button } from "@sps/sps-website-builder-button-contracts";
import type { IModel } from "../interfaces";

export const entity: IModel = {
  ...parentEntity,
  logotypes: Array(5).fill(logotype),
  buttons: [button],
};
