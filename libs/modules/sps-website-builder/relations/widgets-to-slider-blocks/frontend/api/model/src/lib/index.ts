import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/widgets-to-slider-blocks/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder/relations/widgets-to-slider-blocks/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "widgets-to-slider-blocks";
export const route = "/api/sps-website-builder/widgets-to-slider-blocks";
export const populate = relationPopulate;
export const host = BACKEND_URL;
