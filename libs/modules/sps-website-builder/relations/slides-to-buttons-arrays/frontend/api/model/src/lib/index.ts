import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-slides-to-buttons-arrays-contracts";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder-relations-slides-to-buttons-arrays-contracts-extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "slides-to-buttons-arrays";
export const route = "slides-to-buttons-arrays";
export const populate = relationPopulate;
