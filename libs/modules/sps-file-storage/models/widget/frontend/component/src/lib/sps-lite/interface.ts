import { IComponentProps as IAdminTableComponentProps } from "./admin-table";
import { IComponentProps as IAdminTableRowComponentProps } from "./admin-table-row";
import { IComponentProps as IAdminFormComponentProps } from "./admin-form";
import { IComponentProps as IAdminSelectInputComponentProps } from "./admin-select-input";
import { IComponentProps as IDefaultComponentProps } from "./default";
export type IComponentProps =
  | IAdminTableComponentProps
  | IAdminTableRowComponentProps
  | IAdminFormComponentProps
  | IAdminSelectInputComponentProps
  | IDefaultComponentProps
  | never;
