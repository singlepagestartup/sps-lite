import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/features-section-blocks-to-features/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder/relations/features-section-blocks-to-features/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "features-section-blocks-to-features";
export const route =
  "/api/sps-website-builder/features-section-blocks-to-features";
export const populate = relationPopulate;
export const host = BACKEND_URL;
export const query = {
  populate,
};
