import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/slides-to-buttons-arrays/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder/relations/slides-to-buttons-arrays/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "slides-to-buttons-arrays";
export const route = "/api/sps-website-builder/slides-to-buttons-arrays";
export const populate = relationPopulate;
export const host = BACKEND_URL;
