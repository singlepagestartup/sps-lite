import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-navbar-blocks-to-logotypes-contracts";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder-relations-navbar-blocks-to-logotypes-contracts-extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "navbar-blocks-to-logotypes";
export const route = "navbar-blocks-to-logotypes";
export const populate = relationPopulate;
