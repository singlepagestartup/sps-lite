import type { IRelation as IParentRelation } from "@sps/sps-host/relations/pages-to-metadata/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-host/relations/pages-to-metadata/contracts/extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "pages-to-metadata";
export const route = "pages-to-metadata";
export const populate = relationPopulate;
