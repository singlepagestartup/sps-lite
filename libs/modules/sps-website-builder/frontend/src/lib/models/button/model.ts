import {
  IModel as IParentModel,
  variants as parentVariants,
} from "@sps/sps-website-builder-contracts/lib/models/button/interfaces";
import type { IModel as IParentModelExtended } from "@sps/sps-website-builder-contracts-extended/lib/models/button/interfaces";
import { populate as modelPopulate } from "@sps/sps-website-builder-contracts-extended/lib/models/button/populate";

export const variants = [...parentVariants] as const;

export interface IModel extends IParentModel {}
export interface IModelExtended extends IParentModelExtended {}

export const tag = "Button";
export const route = "components/elements.button";
export const populate = modelPopulate;
