import type { IRelation as IParentRelation } from "@sps/sps-host/relations/pages-to-layouts/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-host/relations/pages-to-layouts/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "pages-to-layouts";
export const route = "/api/sps-host/pages-to-layouts";
export const populate = relationPopulate;
export const host = BACKEND_URL;
export const query = {
  populate,
};
