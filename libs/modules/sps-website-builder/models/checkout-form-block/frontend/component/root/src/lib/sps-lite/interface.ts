import { IComponentProps as ISingleStepWithCartComponentProps } from "@sps/sps-website-builder-checkout-form-block-frontend-component-sps-lite-variants-single-step-with-cart";
import { IComponentProps as ISingleStepWithProductComponentProps } from "@sps/sps-website-builder-checkout-form-block-frontend-component-sps-lite-variants-single-step-with-product";
import { IComponentProps as ISingleStepWithTierComponentProps } from "@sps/sps-website-builder-checkout-form-block-frontend-component-sps-lite-variants-single-step-with-tier";

export type IComponentProps =
  | ISingleStepWithCartComponentProps
  | ISingleStepWithProductComponentProps
  | ISingleStepWithTierComponentProps;
