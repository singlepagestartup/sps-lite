import { ISpsComponentBase } from "@sps/ui-adapter";

export const variant = "me-ecommerce-module-cart-default" as const;
export interface IComponentProps extends ISpsComponentBase {
  language: string;
  variant: typeof variant;
}
