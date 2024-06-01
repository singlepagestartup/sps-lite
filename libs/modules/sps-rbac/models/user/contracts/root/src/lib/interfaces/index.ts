import {
  IModel as IParentModel,
  variants as parentVariants,
  statuses as parentStatuses,
} from "./startup";

export const variants = [...parentVariants] as const;
export const statuses = [...parentStatuses] as const;

export interface IModel extends Omit<IParentModel, "variant" | "status"> {
  variant: (typeof variants)[number];
  status: (typeof statuses)[number];
}
