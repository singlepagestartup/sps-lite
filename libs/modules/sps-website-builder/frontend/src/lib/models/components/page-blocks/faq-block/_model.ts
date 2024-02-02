import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/faq-block/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/faq-block/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/faq-block/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "FaqsBlock";
export const route = "components/page-blocks.faqs-block";
export const populate = modelPopulate;
