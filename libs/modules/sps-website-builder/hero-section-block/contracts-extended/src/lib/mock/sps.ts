import { spsEntity as parentEntity } from "@sps/sps-website-builder-hero-section-block-contracts";
import { entity as logotype } from "@sps/sps-website-builder-contracts/lib/models/logotype/mock/sps-lite";
import type { IModel } from "../interfaces/sps";

export const entity: IModel = {
  ...parentEntity,
  logotype: logotype,
};
