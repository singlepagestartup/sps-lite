import type { IModel } from "../interfaces/sps-lite";
import { entity as parentEntity } from "@sps/sps-website-builder-contracts/lib/models/slider/mock/sps-lite";
import { entity as slide } from "@sps/sps-website-builder-contracts/lib/models/slide/mock/sps-lite";

export const entity: IModel = {
  ...parentEntity,
  slides: Array(4).fill(slide),
};
