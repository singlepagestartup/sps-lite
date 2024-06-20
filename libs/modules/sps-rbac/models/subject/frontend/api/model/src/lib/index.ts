import type { IModel as IParentModel } from "@sps/sps-rbac/models/subject/contracts/root";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-rbac/models/subject/contracts/extended";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "subject";
export const route = "subjects";
export const populate = modelPopulate;
