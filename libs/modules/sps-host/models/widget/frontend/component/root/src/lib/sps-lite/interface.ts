import { IComponentProps as IFindByIdComponentProps } from "@sps/sps-host/models/widget/frontend/component/variants/sps-lite/find-by-id";
import { IComponentProps as IFindComponentProps } from "@sps/sps-host/models/widget/frontend/component/variants/sps-lite/find";
import { IComponentProps as IAdminTableRowComponentProps } from "@sps/sps-host/models/widget/frontend/component/variants/sps-lite/admin-table-row";
import { IComponentProps as IAdminTableComponentProps } from "@sps/sps-host/models/widget/frontend/component/variants/sps-lite/admin-table";
import { IComponentProps as IAdminSelectInputComponentProps } from "@sps/sps-host/models/widget/frontend/component/variants/sps-lite/admin-select-input";
import { IComponentProps as IAdminFormComponentProps } from "@sps/sps-host/models/widget/frontend/component/variants/sps-lite/admin-form";
import { IComponentProps as IDefaultComponentProps } from "@sps/sps-host/models/widget/frontend/component/variants/sps-lite/default";
export type IComponentProps =
  | IFindByIdComponentProps
  | IFindComponentProps
  | IAdminTableRowComponentProps
  | IAdminTableComponentProps
  | IAdminSelectInputComponentProps
  | IAdminFormComponentProps
  | IDefaultComponentProps
  | never;
