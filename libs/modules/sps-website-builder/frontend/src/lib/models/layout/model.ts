import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/layout/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/layout/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/layout/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Layout";
export const route = "layouts";
export const populate = modelPopulate;
