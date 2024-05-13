import type { IModel } from "../interfaces/sps-lite";
import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-models-slider-contracts";
import { spsLiteEntity as slide } from "@sps/sps-website-builder-models-slide-contracts";

export const entity = {
  ...parentEntity,
  slides: Array(4).fill(slide),
};
