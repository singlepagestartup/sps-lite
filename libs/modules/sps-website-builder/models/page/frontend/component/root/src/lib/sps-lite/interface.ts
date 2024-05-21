import { IComponentProps as IAdminFormInputsComponentProps } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-admin-form-inputs";
import { IComponentProps as IAdminSelectInputComponentProps } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-admin-select-input";
import { IComponentProps as IAdminFormComponentProps } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-admin-form";
import { IComponentProps as IAdminTableRowComponentProps } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-admin-table-row";
import { IComponentProps as IAdminTableComponentProps } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-admin-table";
import { IComponentProps as IAdminPanelComponentProps } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-admin-panel";
import { IComponentProps as IEditorComponentProps } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-editor";
import { IComponentProps as IGetQueryFromUrlComponentProps } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-get-query-from-url";
import { IComponentProps as IGetUrlModelIdComponentProps } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-get-url-model-id";
import { IComponentProps as IGetByUrlComponentProps } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-get-by-url";
import { IComponentProps as IDefaultComponentProps } from "@sps/sps-website-builder-models-page-frontend-component-variants-sps-lite-default";

export type IComponentProps =
  | IAdminFormInputsComponentProps
  | IAdminSelectInputComponentProps
  | IAdminFormComponentProps
  | IAdminTableRowComponentProps
  | IAdminTableComponentProps
  | IAdminPanelComponentProps
  | IEditorComponentProps
  | IGetQueryFromUrlComponentProps
  | IGetUrlModelIdComponentProps
  | IGetByUrlComponentProps
  | IDefaultComponentProps
  | never;
