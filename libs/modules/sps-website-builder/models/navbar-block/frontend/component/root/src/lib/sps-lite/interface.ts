import { IComponentProps as IAdminTableRowComponentProps } from "@sps/sps-website-builder/models/navbar-block/frontend/component/variants/sps-lite/admin-table-row";
import { IComponentProps as IAdminTableComponentProps } from "@sps/sps-website-builder/models/navbar-block/frontend/component/variants/sps-lite/admin-table";
import { IComponentProps as IAdminSelectInputComponentProps } from "@sps/sps-website-builder/models/navbar-block/frontend/component/variants/sps-lite/admin-select-input";
import { IComponentProps as IAdminFormComponentProps } from "@sps/sps-website-builder/models/navbar-block/frontend/component/variants/sps-lite/admin-form";
import { IComponentProps as IDefaultComponentProps } from "@sps/sps-website-builder/models/navbar-block/frontend/component/variants/sps-lite/default";

export type IComponentProps =
  | IAdminTableRowComponentProps
  | IAdminTableComponentProps
  | IAdminSelectInputComponentProps
  | IAdminFormComponentProps
  | IDefaultComponentProps;
