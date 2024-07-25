import { IComponentProps as IAdminTableRowComponentProps } from "./admin-table-row";
import { IComponentProps as IAdminTableComponentProps } from "./admin-table";
import { IComponentProps as IAdminSelectInputComponentProps } from "./admin-select-input";
import { IComponentProps as IAdminFormComponentProps } from "./admin-form";
import { IComponentProps as IDefaultComponentProps } from "./default";
import { IComponentProps as IImageComponentProps } from "./image";

export type IComponentProps =
  | IAdminTableRowComponentProps
  | IAdminTableComponentProps
  | IAdminSelectInputComponentProps
  | IAdminFormComponentProps
  | IImageComponentProps
  | IDefaultComponentProps;
