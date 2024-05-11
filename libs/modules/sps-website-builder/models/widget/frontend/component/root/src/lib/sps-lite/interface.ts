import { IComponentProps as IAdminFormInputsComponentProps } from "@sps/sps-website-builder-models-widget-frontend-component-variants-sps-lite-admin-form-inputs";
import { IComponentProps as IAdminTableRowComponentProps } from "@sps/sps-website-builder-models-widget-frontend-component-variants-sps-lite-admin-table-row";
import { IComponentProps as IAdminFormComponentProps } from "@sps/sps-website-builder-models-widget-frontend-component-variants-sps-lite-admin-form";
import { IComponentProps as IAdminTableComponentProps } from "@sps/sps-website-builder-models-widget-frontend-component-variants-sps-lite-admin-table";
import { IComponentProps as IDefaultComponentProps } from "@sps/sps-website-builder-models-widget-frontend-component-variants-sps-lite-default";
export type IComponentProps =
  | IAdminFormInputsComponentProps
  | IAdminTableRowComponentProps
  | IAdminFormComponentProps
  | IAdminTableComponentProps
  | IDefaultComponentProps
  | never;
