import type { IRelation as IParentRelation } from "@sps/sps-rbac/relations/widgets-to-authentication-blocks/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-rbac/relations/widgets-to-authentication-blocks/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "widgets-to-authentication-blocks";
export const route = "/api/sps-rbac/widgets-to-authentication-blocks";
export const populate = relationPopulate;
export const host = BACKEND_URL;
