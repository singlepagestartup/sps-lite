import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/locale/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/locale/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/locale/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Locale";
export const route = "locales";
export const populate = modelPopulate;
