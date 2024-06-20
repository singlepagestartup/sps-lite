import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/footer-blocks-to-logotypes/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder/relations/footer-blocks-to-logotypes/contracts/extended";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "footer-blocks-to-logotypes";
export const route = "footer-blocks-to-logotypes";
export const populate = relationPopulate;
