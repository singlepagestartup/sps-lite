import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/navbar/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/navbar/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/navbar/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Navbar";
export const route = "navbars";
export const populate = modelPopulate;
