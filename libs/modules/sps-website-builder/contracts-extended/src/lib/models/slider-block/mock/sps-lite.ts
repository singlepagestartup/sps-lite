import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/models/slider-block/mock/sps-lite";
import { entity as slider } from "@sps/sps-website-builder-contracts/lib/models/slider/mock/sps-lite";
import type { IModel } from "../interfaces";

export const entity: IModel = {
  ...parentEntity,
  slider: slider,
};
