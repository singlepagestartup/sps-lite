import { IComponentProps as IFindComponentProps } from "@sps/sps-website-builder/models/widget/frontend/component/variants/sps-lite/find";
import { IComponentProps as IAdminSelectInputComponentProps } from "@sps/sps-website-builder/models/widget/frontend/component/variants/sps-lite/admin-select-input";
import { IComponentProps as IAdminTableRowComponentProps } from "@sps/sps-website-builder/models/widget/frontend/component/variants/sps-lite/admin-table-row";
import { IComponentProps as IAdminFormComponentProps } from "@sps/sps-website-builder/models/widget/frontend/component/variants/sps-lite/admin-form";
import { IComponentProps as IAdminTableComponentProps } from "@sps/sps-website-builder/models/widget/frontend/component/variants/sps-lite/admin-table";
import { IComponentProps as IDefaultComponentProps } from "@sps/sps-website-builder/models/widget/frontend/component/variants/sps-lite/default";
export type IComponentProps =
  | IFindComponentProps
  | IAdminSelectInputComponentProps
  | IAdminTableRowComponentProps
  | IAdminFormComponentProps
  | IAdminTableComponentProps
  | IDefaultComponentProps
  | never;
