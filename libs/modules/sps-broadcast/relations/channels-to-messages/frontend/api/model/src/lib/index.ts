import type { IRelation as IParentRelation } from "@sps/sps-broadcast/relations/channels-to-messages/contracts/root";
import {
  IRelation as IParentRelationExtended,
  populate as relationPopulate,
} from "@sps/sps-broadcast/relations/channels-to-messages/contracts/extended";
import { BACKEND_URL, REVALIDATE } from "@sps/shared-utils";

export interface IRelation extends IParentRelation {}
export interface IRelationExtended extends IParentRelationExtended {}

export const tag = "channels-to-messages";
export const route = "/api/sps-broadcast/channels-to-messages";
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
