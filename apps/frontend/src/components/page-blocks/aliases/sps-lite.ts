import { pageBlocks as spsCrmPageBlocks } from "@sps/sps-crm-frontend";
import { pageBlocks as spsEcommercePageBlocks } from "@sps/sps-ecommerce-frontend";
// import { pageBlocks as spsWebsiteBuilderPageBlocks } from "@sps/sps-website-builder-frontend";
import TiersListBlock from "../tiers-list-block";
import ReviewsTable from "../reviews-table-block";
import EditSubscriptionBlock from "../edit-subscription-block";

export const pageBlockComponents = {
  ...spsCrmPageBlocks,
  // ...spsWebsiteBuilderPageBlocks,
  ["page-blocks.tiers-list-block"]: TiersListBlock,
  ["page-blocks.reviews-table-block"]: ReviewsTable,

  ["page-blocks.edit-subscription-block"]: EditSubscriptionBlock,
};
