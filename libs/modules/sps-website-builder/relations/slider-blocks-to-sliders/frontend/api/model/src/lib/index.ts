import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/slider-blocks-to-sliders/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder/relations/slider-blocks-to-sliders/contracts/extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "slider-blocks-to-sliders";
export const route = "slider-blocks-to-sliders";
export const populate = relationPopulate;
