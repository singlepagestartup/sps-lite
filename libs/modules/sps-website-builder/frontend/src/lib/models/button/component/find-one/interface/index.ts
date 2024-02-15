import {
  IComponentProps as IParentComponentProps,
  IComponentPropsExtended as IParentComponentPropsExtended,
  variants as parentVariant,
} from "./startup";

export const variants = [...parentVariant] as const;

export interface IComponentProps extends IParentComponentProps {}

export interface IComponentPropsExtended
  extends IParentComponentPropsExtended {}
