import { spsEntity as parentEntity } from "@sps/sps-website-builder-models-hero-section-block-contracts";
import { spsLiteEntity as logotype } from "@sps/sps-website-builder-models-logotype-contracts";
import type { IModel } from "../interfaces/sps";

export const entity: IModel = {
  ...parentEntity,
  logotype: logotype,
};
