import {
  IRelation as IParentRelation,
  variants as parentVariants,
  externalModules as parentExternalModules,
} from "./startup";

export const variants = [...parentVariants] as const;
export const externalModules = [...parentExternalModules] as const;

export interface IRelation extends Omit<IParentRelation, "variant"> {
  variant: (typeof variants)[number];
  externalModule: (typeof externalModules)[number];
}
