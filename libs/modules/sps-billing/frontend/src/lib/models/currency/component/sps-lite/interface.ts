import { IComponentProps as IDefaultComponentProps } from "./Default/interface";
import { IComponentProps as IListComponentProps } from "./List/interface";

export type IComponentProps = IDefaultComponentProps | IListComponentProps;
