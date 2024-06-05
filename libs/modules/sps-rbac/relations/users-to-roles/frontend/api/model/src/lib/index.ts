import type { IRelation as IParentRelation } from "@sps/sps-rbac-relations-users-to-roles-contracts";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-rbac-relations-users-to-roles-contracts-extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "users-to-roles";
export const route = "users-to-roles";
export const populate = relationPopulate;
