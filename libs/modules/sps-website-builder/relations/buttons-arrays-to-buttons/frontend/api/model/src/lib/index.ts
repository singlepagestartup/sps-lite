import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder/relations/buttons-arrays-to-buttons/contracts/extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "buttons-arrays-to-buttons";
export const route = "buttons-arrays-to-buttons";
export const populate = relationPopulate;
