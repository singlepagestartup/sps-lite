import type { IRelation as IParentRelation } from "@sps/sps-rbac-relations-widgets-to-authentication-blocks-contracts";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-rbac-relations-widgets-to-authentication-blocks-contracts-extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "widgets-to-authentication-blocks";
export const route = "widgets-to-authentication-blocks";
export const populate = relationPopulate;
