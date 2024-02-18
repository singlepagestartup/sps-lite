import type { IModel } from "../interfaces/sps-lite";
import { spsLiteEntity as parentEntity } from "@sps/sps-website-builder-slider-contracts";
import { spsLiteEntity as slide } from "@sps/sps-website-builder-slide-contracts";

export const entity: IModel = {
  ...parentEntity,
  slides: Array(4).fill(slide),
};
