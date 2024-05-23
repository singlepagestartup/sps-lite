import {
  IRelation as IParentRelation,
  variants as parentVariants,
} from "./startup";

export const variants = [...parentVariants] as const;

export interface IRelation extends Omit<IParentRelation, "variant"> {
  variant: (typeof variants)[number];
}
