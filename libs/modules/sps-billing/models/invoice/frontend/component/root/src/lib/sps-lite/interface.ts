import { IComponentProps as IDefaultComponentProps } from "@sps/sps-billing-models-invoice-frontend-component-variants-sps-lite-default";
import { IComponentProps as IListComponentProps } from "@sps/sps-billing-models-invoice-frontend-component-variants-sps-lite-list";
import { IComponentProps as IRedirectComponentProps } from "@sps/sps-billing-models-invoice-frontend-component-variants-sps-lite-redirect";

export type IComponentProps =
  | IDefaultComponentProps
  | IListComponentProps
  | IRedirectComponentProps;
