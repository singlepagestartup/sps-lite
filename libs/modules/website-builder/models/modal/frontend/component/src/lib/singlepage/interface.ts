import { IComponentProps as IDefaultComponentProps } from "./default";
import { IComponentProps as IListComponentProps } from "./list";

export type IComponentProps = IDefaultComponentProps | IListComponentProps;
