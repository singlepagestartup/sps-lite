import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/models/logotypes-cloud-block/mock/sps-lite";
import { entity as logotype } from "@sps/sps-website-builder-contracts/lib/models/logotype/mock/sps-lite";
import { entity as button } from "@sps/sps-elements-contracts/lib/models/button/mock/sps-lite";
import type { IModel } from "../interfaces";

export const entity: IModel = {
  ...parentEntity,
  logotypes: Array(5).fill(logotype),
  buttons: [button],
};
