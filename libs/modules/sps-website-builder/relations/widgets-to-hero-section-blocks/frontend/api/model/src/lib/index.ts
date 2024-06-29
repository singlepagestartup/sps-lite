import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/widgets-to-hero-section-blocks/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder/relations/widgets-to-hero-section-blocks/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "widgets-to-hero-section-blocks";
export const route = "/api/sps-website-builder/widgets-to-hero-section-blocks";
export const populate = relationPopulate;
export const host = BACKEND_URL;
