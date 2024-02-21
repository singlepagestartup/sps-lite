import { IComponentProps as IDefaultComponentProps } from "@sps/sps-subscription-attribute-frontend-component-sps-lite-variants-default";
import { IComponentProps as IFeatureComponentProps } from "@sps/sps-subscription-attribute-frontend-component-sps-lite-variants-feature";
import { IComponentProps as IListComponentProps } from "@sps/sps-subscription-attribute-frontend-component-sps-lite-variants-list";
import { IComponentProps as IPriceComponentProps } from "@sps/sps-subscription-attribute-frontend-component-sps-lite-variants-price";

export type IComponentProps =
  | IDefaultComponentProps
  | IListComponentProps
  | IFeatureComponentProps
  | IPriceComponentProps;
