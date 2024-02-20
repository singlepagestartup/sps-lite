import { IComponentProps as IDefaultComponentProps } from "@sps/sps-billing-invoice-frontend-component-sps-lite-variants-default";
import { IComponentProps as IListComponentProps } from "@sps/sps-billing-invoice-frontend-component-sps-lite-variants-list";
import { IComponentProps as IRedirectComponentProps } from "@sps/sps-billing-invoice-frontend-component-sps-lite-variants-redirect";

export type IComponentProps =
  | IDefaultComponentProps
  | IListComponentProps
  | IRedirectComponentProps;
