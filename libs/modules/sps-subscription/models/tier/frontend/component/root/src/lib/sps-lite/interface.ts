import { IComponentProps as IGetByIdComponentProps } from "@sps/sps-subscription-models-tier-frontend-component-variants-sps-lite-get-by-id";

import { IComponentProps as ICheckoutComponentProps } from "@sps/sps-subscription-models-tier-frontend-component-variants-sps-lite-checkout";
import { IComponentProps as IDefaultComponentProps } from "@sps/sps-subscription-models-tier-frontend-component-variants-sps-lite-default";
import { IComponentProps as IListComponentProps } from "@sps/sps-subscription-models-tier-frontend-component-variants-sps-lite-list";

export type IComponentProps =
  | IGetByIdComponentProps
  | ICheckoutComponentProps
  | IDefaultComponentProps
  | IListComponentProps;
