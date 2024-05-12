import { IComponentProps as IAdminTableRowComponentProps } from "@sps/sps-website-builder-models-navbar-block-frontend-component-variants-sps-lite-admin-table-row";
import { IComponentProps as IAdminTableComponentProps } from "@sps/sps-website-builder-models-navbar-block-frontend-component-variants-sps-lite-admin-table";
import { IComponentProps as IAdminSelectInputComponentProps } from "@sps/sps-website-builder-models-navbar-block-frontend-component-variants-sps-lite-admin-select-input";
import { IComponentProps as IAdminFormInputsComponentProps } from "@sps/sps-website-builder-models-navbar-block-frontend-component-variants-sps-lite-admin-form-inputs";
import { IComponentProps as IAdminFormComponentProps } from "@sps/sps-website-builder-models-navbar-block-frontend-component-variants-sps-lite-admin-form";
import { IComponentProps as IDefaultComponentProps } from "@sps/sps-website-builder-models-navbar-block-frontend-component-variants-sps-lite-default";
import { IComponentProps as ICenteredLogotypeComponentProps } from "@sps/sps-website-builder-models-navbar-block-frontend-component-variants-sps-lite-centered-logotype";
import { IComponentProps as ISimpleLinksOnLeftComponentProps } from "@sps/sps-website-builder-models-navbar-block-frontend-component-variants-sps-lite-simple-links-on-left";

export type IComponentProps =
  | IAdminTableRowComponentProps
  | IAdminTableComponentProps
  | IAdminSelectInputComponentProps
  | IAdminFormInputsComponentProps
  | IAdminFormComponentProps
  | IDefaultComponentProps
  | ICenteredLogotypeComponentProps
  | ISimpleLinksOnLeftComponentProps;
