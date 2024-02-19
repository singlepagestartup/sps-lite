import { spsEntity as parentEntity } from "@sps/sps-website-builder-hero-section-block-contracts";
import { spsLiteEntity as logotype } from "@sps/sps-website-builder-logotype-contracts";
import type { IModel } from "../interfaces/sps";

export const entity: IModel = {
  ...parentEntity,
  logotype: logotype,
};
