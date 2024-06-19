import type { IRelation as IParentRelation } from "@sps/sps-host-relations-pages-to-widgets-contracts";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-host-relations-pages-to-widgets-contracts-extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "pages-to-widgets";
export const route = "pages-to-widgets";
export const populate = relationPopulate;
