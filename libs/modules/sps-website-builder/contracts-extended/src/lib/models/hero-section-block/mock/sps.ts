import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/models/hero-section-block/mock/sps";
import { entity as logotype } from "@sps/sps-website-builder-contracts/lib/models/logotype/mock/sps-lite";
import type { IModel } from "../interfaces/sps";

export const entity: IModel = {
  ...parentEntity,
  logotype: logotype,
};
