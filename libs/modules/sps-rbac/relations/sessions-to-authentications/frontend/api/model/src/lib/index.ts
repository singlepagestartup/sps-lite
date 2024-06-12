import type { IRelation as IParentRelation } from "@sps/sps-rbac-relations-sessions-to-authentications-contracts";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-rbac-relations-sessions-to-authentications-contracts-extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "sessions-to-authentications";
export const route = "sessions-to-authentications";
export const populate = relationPopulate;
