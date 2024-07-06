import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/footers-to-widgets/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder/relations/footers-to-widgets/contracts/extended";
import { BACKEND_URL, REVALIDATE } from "@sps/shared-utils";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "footers-to-widgets";
export const route = "/api/sps-website-builder/footers-to-widgets";
export const populate = relationPopulate;
export const host = BACKEND_URL;
export const query = {
  populate,
};
export const options = {
  next: {
    tag,
    revalidate: REVALIDATE,
  },
};
