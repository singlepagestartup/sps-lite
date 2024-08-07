import { IComponentProps as IFindComponentProps } from "@sps/startup/models/widget/frontend/component/variants/sps-lite/find";
import { IComponentProps as IAdminFormComponentProps } from "@sps/startup/models/widget/frontend/component/variants/sps-lite/admin-form";
import { IComponentProps as IAdminTableRowComponentProps } from "@sps/startup/models/widget/frontend/component/variants/sps-lite/admin-table-row";
import { IComponentProps as IAdminTableComponentProps } from "@sps/startup/models/widget/frontend/component/variants/sps-lite/admin-table";
import { IComponentProps as IAdminSelectInputComponentProps } from "@sps/startup/models/widget/frontend/component/variants/sps-lite/admin-select-input";
import { IComponentProps as IDefaultComponentProps } from "@sps/startup/models/widget/frontend/component/variants/sps-lite/default";
export type IComponentProps =
  | IFindComponentProps
  | IAdminFormComponentProps
  | IAdminTableRowComponentProps
  | IAdminTableComponentProps
  | IAdminSelectInputComponentProps
  | IDefaultComponentProps
  | never;
