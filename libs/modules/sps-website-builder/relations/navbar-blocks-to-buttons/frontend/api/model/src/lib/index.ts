import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-navbar-blocks-to-buttons-contracts";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder-relations-navbar-blocks-to-buttons-contracts-extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "navbar-blocks-to-buttons";
export const route = "navbar-blocks-to-buttons";
export const populate = relationPopulate;
