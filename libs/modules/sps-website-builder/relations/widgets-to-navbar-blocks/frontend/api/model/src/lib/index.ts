import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/widgets-to-navbar-blocks/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder/relations/widgets-to-navbar-blocks/contracts/extended";
import { BACKEND_URL, REVALIDATE } from "@sps/shared-utils";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

/**
 * @deprecated
 */
export const tag = "widgets-to-navbar-blocks";
export const route = "/api/sps-website-builder/widgets-to-navbar-blocks";
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
