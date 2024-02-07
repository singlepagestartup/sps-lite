import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/footer/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/footer/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/footer/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Footer";
export const route = "footers";
export const populate = modelPopulate;
