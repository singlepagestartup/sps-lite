import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/pages-to-widgets/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder/relations/pages-to-widgets/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "pages-to-widgets";
export const route = "/api/sps-website-builder/pages-to-widgets";
export const populate = relationPopulate;
export const host = BACKEND_URL;
