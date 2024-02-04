import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/header-section-block/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib//models/header-section-block/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/header-section-block/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "HeaderSectionBlock";
export const route = "components/page-blocks.header-section-block";
export const populate = modelPopulate;
