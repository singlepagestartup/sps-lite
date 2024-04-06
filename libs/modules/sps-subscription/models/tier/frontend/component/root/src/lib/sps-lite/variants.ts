import { Component as GetById } from "@sps/sps-subscription-models-tier-frontend-component-variants-sps-lite-get-by-id";

import { Component as Checkout } from "@sps/sps-subscription-models-tier-frontend-component-variants-sps-lite-checkout";
import { Component as Default } from "@sps/sps-subscription-models-tier-frontend-component-variants-sps-lite-default";
import { Component as List } from "@sps/sps-subscription-models-tier-frontend-component-variants-sps-lite-list";

export const variants = {
  "get-by-id": GetById,

  checkout: Checkout,
  default: Default,
  list: List,
};
