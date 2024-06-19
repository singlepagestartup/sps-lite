import type { IModel as IParentModel } from "@sps/sps-host-models-layout-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-host-models-layout-contracts-extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "layout";
export const route = "layouts";
export const populate = modelPopulate;
