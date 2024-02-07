import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/alert-block/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/alert-block/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/alert-block/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "AlertBlock";
export const route = "components/page-blocks.alert-block";
export const populate = modelPopulate;
