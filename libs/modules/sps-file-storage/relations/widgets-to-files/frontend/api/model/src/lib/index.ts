import type { IRelation as IParentRelation } from "@sps/sps-file-storage/relations/widgets-to-files/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-file-storage/relations/widgets-to-files/contracts/extended";
import { BACKEND_URL, REVALIDATE } from "@sps/shared-utils";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

/**
 * @deprecated
 */
export const tag = "widgets-to-files";
export const route = "/api/sps-file-storage/widgets-to-files";
export const populate = relationPopulate;
export const host = BACKEND_URL;
export const query = {
  populate,
};
export const options = {
  next: {
    revalidate: REVALIDATE,
  },
};
