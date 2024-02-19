import { IComponentProps as IListComponentProps } from "./List/interface";
import { IComponentProps as ISimpleComponentProps } from "./Simple/interface";

export type IComponentProps = ISimpleComponentProps | IListComponentProps;
