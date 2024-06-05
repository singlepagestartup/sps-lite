import type { IRelation as IParentRelation } from "@sps/sps-rbac-relations-users-to-identities-contracts";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-rbac-relations-users-to-identities-contracts-extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "users-to-identities";
export const route = "users-to-identities";
export const populate = relationPopulate;
