import {
  IComponentProps as IParentComponentProps,
  IComponentPropsExtended as IParentComponentPropsExtended,
} from "./startup";

export type IComponentProps<T> = IParentComponentProps<T>;

export type IComponentPropsExtended<T> = IParentComponentPropsExtended<T>;
