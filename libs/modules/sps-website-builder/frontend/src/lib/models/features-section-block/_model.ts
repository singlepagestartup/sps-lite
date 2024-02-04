import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/features-section-block/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/features-section-block/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/features-section-block/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "FeaturesSectionBlock";
export const route = "components/page-blocks.features-section-block";
export const populate = modelPopulate;
