import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/cta-section-block/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/cta-section-block/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/cta-section-block/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "CtaSectionBlock";
export const route = "components/page-blocks.cta-section-block";
export const populate = modelPopulate;
