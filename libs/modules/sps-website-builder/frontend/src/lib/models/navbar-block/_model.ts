import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/navbar-block/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/navbar-block/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/navbar-block/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "NavbarBlock";
export const route = "components/page-blocks.navbar-block";
export const populate = modelPopulate;
