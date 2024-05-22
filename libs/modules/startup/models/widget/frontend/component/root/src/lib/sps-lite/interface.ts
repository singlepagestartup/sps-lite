import { IComponentProps as IAdminSelectInputComponentProps } from "@sps/startup-models-widget-frontend-component-variants-sps-lite-admin-select-input";
import { IComponentProps as IDefaultComponentProps } from "@sps/startup-models-widget-frontend-component-variants-sps-lite-default";
export type IComponentProps =
  | IAdminSelectInputComponentProps
  | IDefaultComponentProps
  | never;
