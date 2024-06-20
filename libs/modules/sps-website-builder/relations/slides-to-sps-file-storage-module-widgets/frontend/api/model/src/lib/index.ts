import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/slides-to-sps-file-storage-module-widgets/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder/relations/slides-to-sps-file-storage-module-widgets/contracts/extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "slides-to-sps-file-storage-module-widgets";
export const route = "slides-to-sps-file-storage-module-widgets";
export const populate = relationPopulate;
