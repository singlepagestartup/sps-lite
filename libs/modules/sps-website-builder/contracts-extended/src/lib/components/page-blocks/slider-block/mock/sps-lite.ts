import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/slider-block/mock/sps-lite";
import { entity as slider } from "@sps/sps-website-builder-contracts/lib/entities/slider/mock/sps-lite";
import type { IComponent } from "../interfaces";

export const entity: IComponent = {
  ...parentEntity,
  slider: slider,
};
