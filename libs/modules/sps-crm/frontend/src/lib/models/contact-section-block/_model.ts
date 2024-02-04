import type { IModel as IParentModel } from "@sps/sps-crm-contracts/lib/models/contact-section-block/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-crm-contracts-extended/lib/models/contact-section-block/interfaces";
import { populate as modelPopulate } from "@sps/sps-crm-contracts-extended/lib/models/contact-section-block/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "ContactSectionBlock";
export const route = "components/page-blocks.contact-section-block";
export const populate = modelPopulate;
