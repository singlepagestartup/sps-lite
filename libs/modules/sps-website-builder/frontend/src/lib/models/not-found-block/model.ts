import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/not-found-block/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/not-found-block/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/not-found-block/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "NotFoundBlock";
export const route = "components/page-blocks.not-found-block";
export const populate = modelPopulate;
