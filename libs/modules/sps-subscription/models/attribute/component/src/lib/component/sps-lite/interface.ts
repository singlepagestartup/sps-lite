import { IComponentProps as IDefaultComponentProps } from "./Default/interface";
import { IComponentProps as IFeatureComponentProps } from "./Feature/interface";
import { IComponentProps as IListComponentProps } from "./List/interface";
import { IComponentProps as IPriceComponentProps } from "./Price/interface";

export type IComponentProps =
  | IDefaultComponentProps
  | IListComponentProps
  | IFeatureComponentProps
  | IPriceComponentProps;
