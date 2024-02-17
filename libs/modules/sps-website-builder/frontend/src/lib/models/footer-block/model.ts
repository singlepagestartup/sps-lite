import {
  IModel as IParentModel,
  variants as parentVariants,
} from "@sps/sps-website-builder-footer-block-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-footer-block-contracts-extended";

export const variants = [...parentVariants] as const;

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "FooterBlock";
export const route = "components/page-blocks.footer-block";
export const populate = modelPopulate;
