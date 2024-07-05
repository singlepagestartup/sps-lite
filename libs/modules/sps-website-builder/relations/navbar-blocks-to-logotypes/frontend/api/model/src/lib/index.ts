import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/navbar-blocks-to-logotypes/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder/relations/navbar-blocks-to-logotypes/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "navbar-blocks-to-logotypes";
export const route = "/api/sps-website-builder/navbar-blocks-to-logotypes";
export const populate = relationPopulate;
export const host = BACKEND_URL;
export const query = {
  populate,
};
