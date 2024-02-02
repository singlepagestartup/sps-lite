import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/hero-section-block/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/hero-section-block/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/hero-section-block/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "HeroSectionBlock";
export const route = "components/page-blocks.hero-section-block";
export const populate = modelPopulate;
