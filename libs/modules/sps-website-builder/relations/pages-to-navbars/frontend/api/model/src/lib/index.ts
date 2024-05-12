import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-pages-to-navbars-contracts";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder-relations-pages-to-navbars-contracts-extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "pages-to-navbars";
export const route = "pages-to-navbars";
export const populate = relationPopulate;
