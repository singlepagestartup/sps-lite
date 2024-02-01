import { IComponent } from "@sps/sps-website-builder-contracts/lib//components/page-blocks/header-section-block/interfaces";
import { IComponent as IComponentExtended } from "@sps/sps-website-builder-contracts-extended/lib//components/page-blocks/header-section-block/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/components/page-blocks/header-section-block/populate";

export interface IModel extends IComponent {}
export interface IModelExtended extends IComponentExtended {}

export const tag = "HeaderSectionBlock";
export const route = "components/page-blocks.header-section-block";
export const populate = modelPopulate;
