import type { IComponent } from "@sps/sps-website-builder-contracts/lib/components/elements/button/interfaces";
import type { IComponent as IComponentExtended } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/button/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/components/elements/button/populate";

export interface IModel extends IComponent {}
export interface IModelExtended extends IComponentExtended {}

export const tag = "Button";
export const route = "components/elements.button";
export const populate = modelPopulate;
