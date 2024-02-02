import { IComponent } from "@sps/sps-website-builder-contracts/lib/models/logotype/interfaces";
import { IComponent as IComponentExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/logotype/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/logotype/populate";

export interface IModel extends IComponent {}
export interface IModelExtended extends IComponentExtended {}

export const tag = "Logotype";
export const route = "components/elements.logotype";
export const populate = modelPopulate;
