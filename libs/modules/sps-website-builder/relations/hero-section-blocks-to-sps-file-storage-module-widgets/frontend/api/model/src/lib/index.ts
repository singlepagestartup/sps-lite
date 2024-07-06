import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/hero-section-blocks-to-sps-file-storage-module-widgets/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder/relations/hero-section-blocks-to-sps-file-storage-module-widgets/contracts/extended";
import { BACKEND_URL, REVALIDATE } from "@sps/shared-utils";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

/**
 * @deprecated
 */
export const tag = "hero-section-blocks-to-sps-file-storage-module-widgets";
export const route =
  "/api/sps-website-builder/hero-section-blocks-to-sps-file-storage-module-widgets";
export const populate = relationPopulate;
export const host = BACKEND_URL;
export const query = {
  populate,
};
export const options = {
  next: {
    revalidate: REVALIDATE,
  },
};
