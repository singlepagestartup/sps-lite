import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/logotype/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/logotype/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/logotype/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Logotype";
export const route = "components/elements.logotype";
export const populate = modelPopulate;
