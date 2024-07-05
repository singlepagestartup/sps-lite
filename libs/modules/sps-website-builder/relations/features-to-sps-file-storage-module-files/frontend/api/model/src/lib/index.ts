import type { IRelation as IParentRelation } from "@sps/sps-website-builder/relations/features-to-sps-file-storage-module-files/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-website-builder/relations/features-to-sps-file-storage-module-files/contracts/extended";
import { BACKEND_URL } from "@sps/shared-utils";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "features-to-sps-file-storage-module-files";
export const route =
  "/api/sps-website-builder/features-to-sps-file-storage-module-files";
export const populate = relationPopulate;
export const host = BACKEND_URL;
export const query = {
  populate,
};
