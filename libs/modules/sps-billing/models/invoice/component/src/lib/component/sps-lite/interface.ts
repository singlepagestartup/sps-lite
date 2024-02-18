import { IComponentProps as IDefaultComponentProps } from "./Default/interface";
import { IComponentProps as IListComponentProps } from "./List/interface";
import { IComponentProps as IRedirectComponentProps } from "./Redirect/interface";

export type IComponentProps =
  | IDefaultComponentProps
  | IListComponentProps
  | IRedirectComponentProps;
