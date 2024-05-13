import {
  IModel as IParentModel,
  variants as parentVariants,
} from "@sps/sps-website-builder-models-logotypes-cloud-block-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-website-builder-models-logotypes-cloud-block-contracts-extended";

export const variants = [...parentVariants] as const;

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "logotypes-cloud-block";
export const route = "components/page-blocks.logotypes-cloud-block";
export const populate = modelPopulate;
