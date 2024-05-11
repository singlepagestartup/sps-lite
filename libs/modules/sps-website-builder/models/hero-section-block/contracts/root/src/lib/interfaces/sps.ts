import { IModel as IParentModel, variants as parentVariants } from "./sps-lite";

export const variants = [...parentVariants] as const;

export interface IModel extends Omit<IParentModel, "variant"> {
  variant: (typeof variants)[number];
}
