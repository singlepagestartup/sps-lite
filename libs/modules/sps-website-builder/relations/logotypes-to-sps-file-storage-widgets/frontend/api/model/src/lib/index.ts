import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-logotypes-to-sps-file-storage-widgets-contracts";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder-relations-logotypes-to-sps-file-storage-widgets-contracts-extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "logotypes-to-sps-file-storage-widgets";
export const route = "logotypes-to-sps-file-storage-widgets";
export const populate = relationPopulate;
