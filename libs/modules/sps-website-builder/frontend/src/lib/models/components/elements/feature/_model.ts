import { IComponent } from "@sps/sps-website-builder-contracts/lib/models/feature/interfaces";
import { IComponent as IComponentExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/feature/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/feature/populate";

export interface IModel extends IComponent {}
export interface IModelExtended extends IComponentExtended {}

export const tag = "Feature";
export const route = "components/elements.feature";
export const populate = modelPopulate;
