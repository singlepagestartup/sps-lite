import {
  IModel as IParentModel,
  variants as parentVariants,
} from "@sps/sps-website-builder-models-edit-subscription-block-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-edit-subscription-block-contracts-extended";

export const variants = [...parentVariants] as const;

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "edit-subscription-block";
export const route = "components/page-blocks.edit-subscription-block";
export const populate = modelPopulate;
