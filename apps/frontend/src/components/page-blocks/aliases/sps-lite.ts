import { pageBlocks as spsCrmPageBlocks } from "@sps/sps-crm-frontend";
// import { pageBlocks as spsWebsiteBuilderPageBlocks } from "@sps/sps-website-builder-frontend";
import ContactSecton from "../contact-section-block";
import TiersListBlock from "../tiers-list-block";
import ReviewsTable from "../reviews-table-block";

import CheckoutFormBlock from "../checkout-form-block";
import ProductsListBlock from "../products-list-block";
import ShoppingCartBlock from "../shopping-cart-block";
import EditSubscriptionBlock from "../edit-subscription-block";

export const pageBlockComponents = {
  ...spsCrmPageBlocks,
  // ...spsWebsiteBuilderPageBlocks,
  ["page-blocks.contact-section-block"]: ContactSecton,
  ["page-blocks.tiers-list-block"]: TiersListBlock,
  ["page-blocks.reviews-table-block"]: ReviewsTable,
  ["page-blocks.checkout-form-block"]: CheckoutFormBlock,
  ["page-blocks.products-list-block"]: ProductsListBlock,
  ["page-blocks.shopping-cart-block"]: ShoppingCartBlock,
  ["page-blocks.edit-subscription-block"]: EditSubscriptionBlock,
};
