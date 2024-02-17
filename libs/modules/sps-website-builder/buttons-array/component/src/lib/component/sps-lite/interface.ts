import { IComponentProps as IColumnWithTitleComponentProps } from "./ColumnWithTitle/interface";
import { IComponentProps as IRowComponentProps } from "./Row/interface";

export type IComponentProps =
  | IColumnWithTitleComponentProps
  | IRowComponentProps;
