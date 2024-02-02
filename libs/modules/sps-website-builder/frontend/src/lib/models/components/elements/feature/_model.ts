import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/feature/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/feature/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/feature/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Feature";
export const route = "components/elements.feature";
export const populate = modelPopulate;
