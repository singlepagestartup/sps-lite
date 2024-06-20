import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/layouts-to-footers/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder/relations/layouts-to-footers/contracts/extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "layouts-to-footers";
export const route = "layouts-to-footers";
export const populate = relationPopulate;
