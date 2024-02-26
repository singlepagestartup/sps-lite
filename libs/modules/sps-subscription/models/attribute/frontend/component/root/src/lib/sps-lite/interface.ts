import { IComponentProps as IDefaultComponentProps } from "@sps/sps-subscription-models-attribute-frontend-component-variants-sps-lite-default";
import { IComponentProps as IFeatureComponentProps } from "@sps/sps-subscription-models-attribute-frontend-component-variants-sps-lite-feature";
import { IComponentProps as IListComponentProps } from "@sps/sps-subscription-models-attribute-frontend-component-variants-sps-lite-list";
import { IComponentProps as IPriceComponentProps } from "@sps/sps-subscription-models-attribute-frontend-component-variants-sps-lite-price";

export type IComponentProps =
  | IDefaultComponentProps
  | IListComponentProps
  | IFeatureComponentProps
  | IPriceComponentProps;
