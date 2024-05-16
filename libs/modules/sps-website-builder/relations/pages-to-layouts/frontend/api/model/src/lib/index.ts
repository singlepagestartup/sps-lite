import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-pages-to-layouts-contracts";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder-relations-pages-to-layouts-contracts-extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "pages-to-layouts";
export const route = "pages-to-layouts";
export const populate = relationPopulate;
