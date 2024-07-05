import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "buttons-arrays-to-buttons";
export const route = "/api/sps-website-builder/buttons-arrays-to-buttons";
export const populate = relationPopulate;
export const host = BACKEND_URL;
export const query = {
  populate,
};
