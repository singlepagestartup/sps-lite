import { Component as GetById } from "@sps/sps-ecommerce-models-product-frontend-component-variants-sps-lite-get-by-id";
import { Component as CheckoutForm } from "@sps/sps-ecommerce-models-product-frontend-component-variants-sps-lite-checkout-form";

import { Component as Default } from "@sps/sps-ecommerce-models-product-frontend-component-variants-sps-lite-default";
import { Component as InCart } from "@sps/sps-ecommerce-models-product-frontend-component-variants-sps-lite-in-cart";
import { Component as List } from "@sps/sps-ecommerce-models-product-frontend-component-variants-sps-lite-list";

export const variants = {
  "get-by-id": GetById,
  "checkout-form": CheckoutForm,

  default: Default,
  "in-cart": InCart,
  list: List,
};
