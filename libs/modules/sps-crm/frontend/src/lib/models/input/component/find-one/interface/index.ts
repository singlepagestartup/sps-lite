import {
  IComponentProps as IParentComponentProps,
  IComponentPropsExtended as IParentComponentPropsExtended,
  variants as parentVariants,
} from "./startup";

export const variants = [...parentVariants] as const;

export interface IComponentProps extends IParentComponentProps {}

export interface IComponentPropsExtended
  extends IParentComponentPropsExtended {}
