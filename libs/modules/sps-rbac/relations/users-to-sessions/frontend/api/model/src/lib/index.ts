import type { IRelation as IParentRelation } from "@sps/sps-rbac-relations-users-to-sessions-contracts";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-rbac-relations-users-to-sessions-contracts-extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "users-to-sessions";
export const route = "users-to-sessions";
export const populate = relationPopulate;
