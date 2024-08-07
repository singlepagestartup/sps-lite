import { IComponentProps as IAdminTableRowComponentProps } from "@sps/sps-host/relations/pages-to-metadata/frontend/component/variants/sps-lite/admin-table-row";
import { IComponentProps as IAdminTableComponentProps } from "@sps/sps-host/relations/pages-to-metadata/frontend/component/variants/sps-lite/admin-table";
import { IComponentProps as IAdminSelectInputComponentProps } from "@sps/sps-host/relations/pages-to-metadata/frontend/component/variants/sps-lite/admin-select-input";
import { IComponentProps as IAdminFormComponentProps } from "@sps/sps-host/relations/pages-to-metadata/frontend/component/variants/sps-lite/admin-form";
export type IComponentProps =
  | IAdminTableRowComponentProps
  | IAdminTableComponentProps
  | IAdminSelectInputComponentProps
  | IAdminFormComponentProps
  | never;
