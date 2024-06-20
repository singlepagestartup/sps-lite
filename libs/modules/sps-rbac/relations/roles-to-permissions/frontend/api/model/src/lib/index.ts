import type { IRelation as IParentRelation } from "@sps/sps-rbac/relations/roles-to-permissions/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-rbac/relations/roles-to-permissions/contracts/extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "roles-to-permissions";
export const route = "roles-to-permissions";
export const populate = relationPopulate;
