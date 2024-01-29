import type { IEntity } from "../interfaces/sps-lite";
import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/entities/slider/mock/sps-lite";
import { entity as slide } from "@sps/sps-website-builder-contracts/lib/components/elements/slide/mock/sps-lite";

export const entity: IEntity = {
  ...parentEntity,
  slides: Array(4).fill(slide),
};
