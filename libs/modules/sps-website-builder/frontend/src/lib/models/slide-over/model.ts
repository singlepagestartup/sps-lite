import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/slide-over/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/slide-over/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/slide-over/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "SlideOver";
export const route = "slide-overs";
export const populate = modelPopulate;
