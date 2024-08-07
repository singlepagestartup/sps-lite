import { IComponentProps as IAdminTableRowComponentProps } from "@sps/sps-rbac/models/session/frontend/component/variants/sps-lite/admin-table-row";
import { IComponentProps as IAdminTableComponentProps } from "@sps/sps-rbac/models/session/frontend/component/variants/sps-lite/admin-table";
import { IComponentProps as IAdminSelectInputComponentProps } from "@sps/sps-rbac/models/session/frontend/component/variants/sps-lite/admin-select-input";
import { IComponentProps as IAdminFormComponentProps } from "@sps/sps-rbac/models/session/frontend/component/variants/sps-lite/admin-form";
import { IComponentProps as IAdminSelectInputComponentProps } from "@sps/sps-rbac/models/widget/frontend/component/variants/sps-lite/admin-select-input";
export type IComponentProps =
  | IAdminTableRowComponentProps
  | IAdminTableComponentProps
  | IAdminSelectInputComponentProps
  | IAdminFormComponentProps
  | IAdminSelectInputComponentProps
  | never;
