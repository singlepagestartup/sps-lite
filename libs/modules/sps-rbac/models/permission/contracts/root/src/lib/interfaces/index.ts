import {
  IModel as IParentModel,
  variants as parentVariants,
  methods as parentMethods,
  types as parentTypes,
} from "./startup";

export const variants = [...parentVariants] as const;
export const methods = [...parentMethods] as const;
export const types = [...parentTypes] as const;

export interface IModel extends Omit<IParentModel, "variant"> {
  variant: (typeof variants)[number];
  type: (typeof types)[number];
  method: (typeof methods)[number];
}
