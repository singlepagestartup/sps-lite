import { IComponentProps as IDefaultComponentProps } from "@sps/sps-billing-invoice-component-variants-default";
import { IComponentProps as IListComponentProps } from "@sps/sps-billing-invoice-component-variants-list";
import { IComponentProps as IRedirectComponentProps } from "@sps/sps-billing-invoice-component-variants-redirect";

export type IComponentProps =
  | IDefaultComponentProps
  | IListComponentProps
  | IRedirectComponentProps;
