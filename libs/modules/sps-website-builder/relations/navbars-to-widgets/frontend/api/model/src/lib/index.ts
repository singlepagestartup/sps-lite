import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/navbars-to-widgets/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder/relations/navbars-to-widgets/contracts/extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "navbars-to-widgets";
export const route = "navbars-to-widgets";
export const populate = relationPopulate;
