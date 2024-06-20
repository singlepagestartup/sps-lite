import type { IRelation as IParentRelation } from "@sps/sps-host/relations/widgets-to-external-modules/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-host/relations/widgets-to-external-modules/contracts/extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "widgets-to-external-modules";
export const route = "widgets-to-external-modules";
export const populate = relationPopulate;
