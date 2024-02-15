import {
  IComponentProps as IParentComponentProps,
  IComponentPropsExtended as IParentComponentPropsExtended,
  variants as parentVariants,
  IComponentBase as IParentComponentBase,
} from "./startup";

export const variants = [...parentVariants] as const;

export interface IComponentBase extends IParentComponentBase {}

export interface IComponentProps extends IParentComponentProps {}

export interface IComponentPropsExtended
  extends IParentComponentPropsExtended {}
