import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/sliders-to-slides/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder/relations/sliders-to-slides/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "sliders-to-slides";
export const route = "/api/sps-website-builder/sliders-to-slides";
export const populate = relationPopulate;
export const host = BACKEND_URL;
export const query = {
  populate,
};
