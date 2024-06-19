import type { IRelation as IParentRelation } from "@sps/sps-host-relations-widgets-to-sps-website-builder-module-widgets-contracts";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-host-relations-widgets-to-sps-website-builder-module-widgets-contracts-extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "widgets-to-sps-website-builder-module-widgets";
export const route = "widgets-to-sps-website-builder-module-widgets";
export const populate = relationPopulate;
