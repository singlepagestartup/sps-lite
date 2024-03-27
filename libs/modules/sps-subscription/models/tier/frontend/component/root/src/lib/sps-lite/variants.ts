import { Component as GetFromUrl } from "@sps/sps-subscription-models-tier-frontend-component-variants-sps-lite-get-from-url";

import { Component as Checkout } from "@sps/sps-subscription-models-tier-frontend-component-variants-sps-lite-checkout";
import { Component as Default } from "@sps/sps-subscription-models-tier-frontend-component-variants-sps-lite-default";
import { Component as List } from "@sps/sps-subscription-models-tier-frontend-component-variants-sps-lite-list";

export const variants = {
  "get-from-url": GetFromUrl,

  checkout: Checkout,
  default: Default,
  list: List,
};
