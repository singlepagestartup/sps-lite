import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-widgets-to-hero-section-blocks-contracts";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder-relations-widgets-to-hero-section-blocks-contracts-extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "widgets-to-hero-section-blocks";
export const route = "widgets-to-hero-section-blocks";
export const populate = relationPopulate;
