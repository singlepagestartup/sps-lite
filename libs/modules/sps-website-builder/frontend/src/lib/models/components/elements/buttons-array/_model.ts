import { IComponent } from "@sps/sps-website-builder-contracts/lib/models/buttons-array/interfaces";
import { IComponent as IComponentExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/buttons-array/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/buttons-array/populate";

export interface IModel extends IComponent {}
export interface IModelExtended extends IComponentExtended {}

export const tag = "ButtonsArray";
export const route = "components/elements.buttons-array";
export const populate = modelPopulate;
