import { IComponentProps as ISpsLiteComponentProps } from "./sps-lite/interface";
import { IComponentProps as ISpsComponentProps } from "./sps/interface";
import { IComponentProps as IStartupComponentProps } from "./startup/interface";

export type IComponentProps =
  | ISpsLiteComponentProps
  | ISpsComponentProps
  | IStartupComponentProps;
