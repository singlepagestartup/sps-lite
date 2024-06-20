import type { IRelation as IParentRelation } from "@sps/sps-host-relations-layouts-to-widgets-contracts";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-host-relations-layouts-to-widgets-contracts-extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "layouts-to-widgets";
export const route = "layouts-to-widgets";
export const populate = relationPopulate;
