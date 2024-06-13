import { IComponentProps as IFindByIdComponentProps } from "@sps/sps-third-parties-models-telegram-frontend-component-variants-sps-lite-find-by-id";
import { IComponentProps as IFindComponentProps } from "@sps/sps-third-parties-models-telegram-frontend-component-variants-sps-lite-find";
import { IComponentProps as IAdminTableRowComponentProps } from "@sps/sps-third-parties-models-telegram-frontend-component-variants-sps-lite-admin-table-row";
import { IComponentProps as IAdminTableComponentProps } from "@sps/sps-third-parties-models-telegram-frontend-component-variants-sps-lite-admin-table";
import { IComponentProps as IAdminSelectInputComponentProps } from "@sps/sps-third-parties-models-telegram-frontend-component-variants-sps-lite-admin-select-input";
import { IComponentProps as IAdminFormInputsComponentProps } from "@sps/sps-third-parties-models-telegram-frontend-component-variants-sps-lite-admin-form-inputs";
import { IComponentProps as IAdminFormComponentProps } from "@sps/sps-third-parties-models-telegram-frontend-component-variants-sps-lite-admin-form";
export type IComponentProps =
  | IFindByIdComponentProps
  | IFindComponentProps
  | IAdminTableRowComponentProps
  | IAdminTableComponentProps
  | IAdminSelectInputComponentProps
  | IAdminFormInputsComponentProps
  | IAdminFormComponentProps
  | never;
