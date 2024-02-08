import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/theme/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/theme/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/theme/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Theme";
export const route = "themes";
export const populate = modelPopulate;
