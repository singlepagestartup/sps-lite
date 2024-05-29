import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-slides-to-sps-file-storage-widgets-contracts";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder-relations-slides-to-sps-file-storage-widgets-contracts-extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "slides-to-sps-file-storage-widgets";
export const route = "slides-to-sps-file-storage-widgets";
export const populate = relationPopulate;
