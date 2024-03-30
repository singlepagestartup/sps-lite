import {
  IModel as IParentModel,
  variants as parentVariants,
} from "@sps/sps-website-builder-models-reviews-table-block-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-reviews-table-block-contracts-extended";

export const variants = [...parentVariants] as const;

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "reviews-table-block";
export const route = "components/page-blocks.reviews-table-block";
export const populate = modelPopulate;
