import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-models-slider-block-contracts";
import { spsLiteEntity as slider } from "@sps/sps-website-builder-models-slider-contracts";
import type { IModel } from "../interfaces";

export const entity: IModel = {
  ...parentEntity,
  slider: slider,
};
