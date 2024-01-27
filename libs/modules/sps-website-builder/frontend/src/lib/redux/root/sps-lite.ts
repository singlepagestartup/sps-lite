import { slices as spsWebsiteBuilderSlices } from "../slices/index";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { slices as spsBillingSlices } from "@sps/sps-billing-frontend";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { slices as spsCrmSlices } from "@sps/sps-crm-frontend";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { slices as spsEcommerceSlices } from "@sps/sps-ecommerce-frontend";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { slices as spsSubscriptionSlices } from "@sps/sps-subscription-frontend";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { slices as spsRbacSlices } from "@sps/sps-rbac-frontend";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { slices as spsFileStorageSlices } from "@sps/sps-file-storage-frontend";

export const rootSlices = {
  middlewares: [
    ...spsWebsiteBuilderSlices.middlewares,
    ...spsBillingSlices.middlewares,
    ...spsCrmSlices.middlewares,
    ...spsEcommerceSlices.middlewares,
    ...spsSubscriptionSlices.middlewares,
    ...spsRbacSlices.middlewares,
    ...spsFileStorageSlices.middlewares,
  ],
  reducer: {
    ...spsWebsiteBuilderSlices.reducer,
    ...spsBillingSlices.reducer,
    ...spsCrmSlices.reducer,
    ...spsEcommerceSlices.reducer,
    ...spsSubscriptionSlices.reducer,
    ...spsRbacSlices.reducer,
    ...spsFileStorageSlices.reducer,
  },
};
