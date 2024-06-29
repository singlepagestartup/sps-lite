import type { IRelation as IParentRelation } from "@sps/sps-host/relations/pages-to-metadata/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-host/relations/pages-to-metadata/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "pages-to-metadata";
export const route = "/api/sps-host/pages-to-metadata";
export const populate = relationPopulate;
export const host = BACKEND_URL;
