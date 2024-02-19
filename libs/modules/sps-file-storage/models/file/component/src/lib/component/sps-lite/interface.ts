import { IComponentProps as IDefaultComponentProps } from "./Default/interface";
import { IComponentProps as IImageComponentProps } from "./Image/interface";

export type IComponentProps = IImageComponentProps | IDefaultComponentProps;
