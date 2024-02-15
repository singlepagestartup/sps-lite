import { IComponentProps as IDefaultComponentProps } from "./Default/interface";
import { IComponentProps as IIdFromUrlComponentProps } from "./IdFromUrl/interface";
import { IComponentProps as IInCartComponentProps } from "./InCart/interface";
import { IComponentProps as IListComponentProps } from "./List/interface";

export type IComponentProps =
  | IIdFromUrlComponentProps
  | IDefaultComponentProps
  | IInCartComponentProps
  | IListComponentProps;
