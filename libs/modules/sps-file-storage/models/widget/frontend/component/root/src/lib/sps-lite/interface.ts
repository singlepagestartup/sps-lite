import { IComponentProps as IAdminTableComponentProps } from "@sps/sps-file-storage-models-widget-frontend-component-variants-sps-lite-admin-table";
import { IComponentProps as IAdminTableRowComponentProps } from "@sps/sps-file-storage-models-widget-frontend-component-variants-sps-lite-admin-table-row";
import { IComponentProps as IAdminFormComponentProps } from "@sps/sps-file-storage-models-widget-frontend-component-variants-sps-lite-admin-form";
import { IComponentProps as IAdminFormInputsComponentProps } from "@sps/sps-file-storage-models-widget-frontend-component-variants-sps-lite-admin-form-inputs";
import { IComponentProps as IAdminSelectInputComponentProps } from "@sps/sps-file-storage-models-widget-frontend-component-variants-sps-lite-admin-select-input";
import { IComponentProps as IDefaultComponentProps } from "@sps/sps-file-storage-models-widget-frontend-component-variants-sps-lite-default";
export type IComponentProps =
  | IAdminTableComponentProps
  | IAdminTableRowComponentProps
  | IAdminFormComponentProps
  | IAdminFormInputsComponentProps
  | IAdminSelectInputComponentProps
  | IDefaultComponentProps
  | never;
