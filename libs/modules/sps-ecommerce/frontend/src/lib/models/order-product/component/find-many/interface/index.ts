import {
  IComponentProps as IParentComponentProps,
  IComponentPropsExtended as IParentComponentPropsExtended,
  variants as parentVariant,
  IComponentBase as IParentComponentBase,
} from "./startup";

export const variants = parentVariant;

export interface IComponentBase extends IParentComponentBase {}

export interface IComponentProps extends IParentComponentProps {}

export interface IComponentPropsExtended
  extends IParentComponentPropsExtended {}
