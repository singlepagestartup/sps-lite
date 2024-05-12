import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-widgets-to-navbar-blocks-contracts";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder-relations-widgets-to-navbar-blocks-contracts-extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "widgets-to-navbar-blocks";
export const route = "widgets-to-navbar-blocks";
export const populate = relationPopulate;
