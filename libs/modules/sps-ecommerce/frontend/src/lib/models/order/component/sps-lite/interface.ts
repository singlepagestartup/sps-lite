import { IComponentProps as IDefaultComponentProps } from "./Default/interface";
import { IComponentProps as ICheckoutComponentProps } from "./Checkout/interface";
import { IComponentProps as IListComponentProps } from "./List/interface";

export type IComponentProps =
  | ICheckoutComponentProps
  | IDefaultComponentProps
  | IListComponentProps;
