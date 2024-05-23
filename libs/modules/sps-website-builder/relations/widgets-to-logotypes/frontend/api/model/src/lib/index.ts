import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-widgets-to-logotypes-contracts";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder-relations-widgets-to-logotypes-contracts-extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "widgets-to-logotypes";
export const route = "widgets-to-logotypes";
export const populate = relationPopulate;
