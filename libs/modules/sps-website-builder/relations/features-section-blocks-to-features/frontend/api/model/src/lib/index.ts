import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/features-section-blocks-to-features/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder/relations/features-section-blocks-to-features/contracts/extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "features-section-blocks-to-features";
export const route = "features-section-blocks-to-features";
export const populate = relationPopulate;
