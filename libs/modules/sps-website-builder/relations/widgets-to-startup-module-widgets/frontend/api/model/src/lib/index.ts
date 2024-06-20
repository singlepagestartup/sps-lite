import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/widgets-to-startup-module-widgets/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder/relations/widgets-to-startup-module-widgets/contracts/extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "widgets-to-startup-module-widgets";
export const route = "widgets-to-startup-module-widgets";
export const populate = relationPopulate;
