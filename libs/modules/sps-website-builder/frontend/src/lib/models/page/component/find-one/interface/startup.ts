import {
  IComponentProps as IParentComponentProps,
  IComponentPropsExtended as IParentComponentPropsExtended,
  IComponentBase as IParentComponentBase,
} from "./sps-lite";

export interface IComponentBase extends IParentComponentBase {}

export interface IComponentProps
  extends IParentComponentProps,
    IComponentBase {}

export interface IComponentPropsExtended
  extends IParentComponentPropsExtended,
    IComponentBase {}
