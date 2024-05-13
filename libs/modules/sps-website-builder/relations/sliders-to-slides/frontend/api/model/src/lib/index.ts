import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-sliders-to-slides-contracts";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder-relations-sliders-to-slides-contracts-extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "sliders-to-slides";
export const route = "sliders-to-slides";
export const populate = relationPopulate;
