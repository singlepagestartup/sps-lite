import {
  IComponentProps as IParentComponentProps,
  IComponentPropsExtended as IParentComponentPropsExtended,
  variants as parentVariant,
  IComponentBase as IParentComponentBase,
} from "./sps-lite";

export const variants = [...parentVariant] as const;

export interface IComponentBase extends IParentComponentBase {}

export interface IComponentProps
  extends Omit<IParentComponentProps, "variant">,
    IParentComponentBase {
  variant: (typeof variants)[number];
}

export interface IComponentPropsExtended
  extends Omit<IParentComponentPropsExtended, "variant">,
    IComponentProps {
  variant: (typeof variants)[number];
}
