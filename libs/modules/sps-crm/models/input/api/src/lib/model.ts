import {
  IModel as IParentModel,
  variants as parentVariants,
} from "@sps/sps-crm-input-contracts";
import {
  IModel as IParentModelExtended,
  populate as modelPopulate,
} from "@sps/sps-crm-input-contracts-extended";

export const variants = [...parentVariants] as const;

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Input";
export const route = "components/elements.input";
export const populate = modelPopulate;
