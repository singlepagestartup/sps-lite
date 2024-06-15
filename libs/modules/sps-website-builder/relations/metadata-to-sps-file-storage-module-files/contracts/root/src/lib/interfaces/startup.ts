import {
  IRelation as IParentRelation,
  variants as parentVariants,
  types as parentTypes,
} from "./sps-lite";

export const variants = [...parentVariants] as const;
export const types = [...parentTypes] as const;

export interface IRelation extends Omit<IParentRelation, "variant"> {
  variant: (typeof variants)[number];
  types: (typeof types)[number];
}
