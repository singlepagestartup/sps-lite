import {
  IModel as IParentModel,
  variants as parentVariants,
  providers as parentProviders,
} from "./sps-lite";

export const variants = [...parentVariants] as const;
export const providers = [...parentProviders] as const;

export interface IModel extends Omit<IParentModel, "variant" | "provider"> {
  variant: (typeof variants)[number];
  provider: (typeof providers)[number];
}
