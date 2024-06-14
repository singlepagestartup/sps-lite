import type { IRelation as IParentRelation } from "@sps/sps-rbac-relations-subjects-to-identities-contracts";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-rbac-relations-subjects-to-identities-contracts-extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "subjects-to-identities";
export const route = "subjects-to-identities";
export const populate = relationPopulate;
