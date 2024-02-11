import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/slide/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/slide/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/slide/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Slide";
export const route = "components/elements.slide";
export const populate = modelPopulate;
