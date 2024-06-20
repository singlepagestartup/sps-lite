import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/logotypes-to-sps-file-storage-module-widgets/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder/relations/logotypes-to-sps-file-storage-module-widgets/contracts/extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "logotypes-to-sps-file-storage-module-widgets";
export const route = "logotypes-to-sps-file-storage-module-widgets";
export const populate = relationPopulate;
