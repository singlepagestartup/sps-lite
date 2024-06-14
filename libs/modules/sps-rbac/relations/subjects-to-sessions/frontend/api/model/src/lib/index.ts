import type { IRelation as IParentRelation } from "@sps/sps-rbac-relations-subjects-to-sessions-contracts";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-rbac-relations-subjects-to-sessions-contracts-extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "subjects-to-sessions";
export const route = "subjects-to-sessions";
export const populate = relationPopulate;
