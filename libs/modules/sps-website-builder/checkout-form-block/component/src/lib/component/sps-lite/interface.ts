import { IComponentProps as ISingleStepWithCartComponentProps } from "./SingleStepWithCart/interface";
import { IComponentProps as ISingleStepWithProductComponentProps } from "./SingleStepWithProduct/interface";
import { IComponentProps as ISingleStepWithTierComponentProps } from "./SingleStepWithTier/interface";

export type IComponentProps =
  | ISingleStepWithCartComponentProps
  | ISingleStepWithProductComponentProps
  | ISingleStepWithTierComponentProps;
