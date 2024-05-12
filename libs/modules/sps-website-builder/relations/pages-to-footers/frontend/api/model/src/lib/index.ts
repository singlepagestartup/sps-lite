import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-pages-to-footers-contracts";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder-relations-pages-to-footers-contracts-extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "pages-to-footers";
export const route = "pages-to-footers";
export const populate = relationPopulate;
