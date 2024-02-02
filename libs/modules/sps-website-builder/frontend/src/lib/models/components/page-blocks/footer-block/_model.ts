import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/footer-block/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/footer-block/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/footer-block/populate";

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "FooterBlock";
export const route = "components/page-blocks.footer-block";
export const populate = modelPopulate;
