import {
  IModel as IParentModel,
  variants as parentVariants,
} from "@sps/sps-website-builder-contracts/lib/models/checkout-form-block/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/checkout-form-block/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/checkout-form-block/populate";

export const variants = [...parentVariants] as const;

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "CheckoutFormBlock";
export const route = "components/page-blocks.checkout-form-block";
export const populate = modelPopulate;
