import type { IRelation as IParentRelation } from "@sps/sps-website-builder-relations-logotypes-to-files-contracts";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder-relations-logotypes-to-files-contracts-extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "logotypes-to-files";
export const route = "logotypes-to-files";
export const populate = relationPopulate;
