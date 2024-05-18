import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-widgets-to-modules-contracts";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder-relations-widgets-to-modules-contracts-extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "widgets-to-modules";
export const route = "widgets-to-modules";
export const populate = relationPopulate;
