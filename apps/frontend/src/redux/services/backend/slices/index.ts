import { slices as spsBillingSlices } from "@sps/sps-billing-frontend";
// import { slices as spsCrmSlices } from "@sps/sps-crm-frontend";
import { slices as spsEcommerceSlices } from "@sps/sps-ecommerce-frontend";
import { slices as spsSubscriptionSlices } from "@sps/sps-subscription-frontend";
import { slices as spsRbacSlices } from "@sps/sps-rbac-frontend";
import { slices as spsFileStorageSlices } from "@sps/sps-file-storage-frontend";
import { slices as apiSlices } from "@sps/api-frontend";

export const slices = {
  middlewares: [
    ...spsBillingSlices.middlewares,
    // ...spsCrmSlices.middlewares,
    ...spsEcommerceSlices.middlewares,
    ...spsSubscriptionSlices.middlewares,
    ...spsRbacSlices.middlewares,
    ...spsFileStorageSlices.middlewares,
    ...apiSlices.middlewares,
  ],
  reducer: {
    ...spsBillingSlices.reducer,
    // ...spsCrmSlices.reducer,
    ...spsEcommerceSlices.reducer,
    ...spsSubscriptionSlices.reducer,
    ...spsRbacSlices.reducer,
    ...spsFileStorageSlices.reducer,
    ...apiSlices.reducer,
  },
};
