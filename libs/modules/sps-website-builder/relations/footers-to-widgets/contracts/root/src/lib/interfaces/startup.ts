import {
  IRelation as IParentRelation,
  variants as parentVariants,
} from "./sps-lite";

export const variants = [...parentVariants] as const;

export interface IRelation extends Omit<IParentRelation, "variant"> {
  variant: (typeof variants)[number];
}
