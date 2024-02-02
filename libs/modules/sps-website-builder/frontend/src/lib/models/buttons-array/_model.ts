import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/buttons-array/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/buttons-array/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/buttons-array/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "ButtonsArray";
export const route = "components/elements.buttons-array";
export const populate = modelPopulate;
