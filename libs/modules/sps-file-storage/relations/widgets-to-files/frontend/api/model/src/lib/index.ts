import type { IRelation as IParentRelation } from "@sps/sps-file-storage-relations-widgets-to-files-contracts";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-file-storage-relations-widgets-to-files-contracts-extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "widgets-to-files";
export const route = "widgets-to-files";
export const populate = relationPopulate;
