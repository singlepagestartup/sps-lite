import { Component as CheckoutForm } from "@sps/sps-ecommerce-models-product-frontend-component-variants-sps-lite-checkout-form";
import { Component as GetFromUrl } from "@sps/sps-ecommerce-models-product-frontend-component-variants-sps-lite-get-from-url";

import { Component as Default } from "@sps/sps-ecommerce-models-product-frontend-component-variants-sps-lite-default";
import { Component as InCart } from "@sps/sps-ecommerce-models-product-frontend-component-variants-sps-lite-in-cart";
import { Component as List } from "@sps/sps-ecommerce-models-product-frontend-component-variants-sps-lite-list";

export const variants = {
  "checkout-form": CheckoutForm,
  "get-from-url": GetFromUrl,

  default: Default,
  "in-cart": InCart,
  list: List,
};
