import { IComponentProps as IUpdateByEmailComponentProps } from "@sps/sps-subscription-models-subscription-frontend-component-variants-sps-lite-update-by-email";
import { IComponentProps as IDefaultComponentProps } from "@sps/sps-subscription-models-subscription-frontend-component-variants-sps-lite-default";
import { IComponentProps as IListComponentProps } from "@sps/sps-subscription-models-subscription-frontend-component-variants-sps-lite-list";

export type IComponentProps =
  | IUpdateByEmailComponentProps
  | IDefaultComponentProps
  | IListComponentProps;
