import { IComponent } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/navbar-block/interfaces";
import { IComponent as IComponentExtended } from "@sps/sps-website-builder-contracts-extended/lib/components/page-blocks/navbar-block/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/components/page-blocks/navbar-block/populate";

export interface IModel extends IComponent {}
export interface IModelExtended extends IComponentExtended {}

export const tag = "NavbarBlock";
export const route = "components/page-blocks.navbar-block";
export const populate = modelPopulate;
