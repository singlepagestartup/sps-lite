import { slices as spsWebsiteBuilderSlices } from "../../redux/slices/index";
// import { slices as spsBillingSlices } from "@sps/sps-billing-frontend/lib/redux/slices";
// import { slices as spsCrmSlices } from "@sps/sps-crm-frontend/lib/redux/slices";
// import { slices as spsEcommerceSlices } from "@sps/sps-ecommerce-frontend/lib/redux/slices";
// import { slices as spsSubscriptionSlices } from "@sps/sps-subscription-frontend/lib/redux/slices";
// import { slices as spsRbacSlices } from "@sps/sps-rbac-frontend/lib/redux/slices";
// import { slices as spsFileStorageSlices } from "@sps/sps-file-storage-frontend/lib/redux/slices";

export const rootSlices = {
  middlewares: [
    ...spsWebsiteBuilderSlices.middlewares,
    // ...spsBillingSlices.middlewares,
    // ...spsCrmSlices.middlewares,
    // ...spsEcommerceSlices.middlewares,
    // ...spsSubscriptionSlices.middlewares,
    // ...spsRbacSlices.middlewares,
    // ...spsFileStorageSlices.middlewares,
  ],
  reducer: {
    ...spsWebsiteBuilderSlices.reducer,
    // ...spsBillingSlices.reducer,
    // ...spsCrmSlices.reducer,
    // ...spsEcommerceSlices.reducer,
    // ...spsSubscriptionSlices.reducer,
    // ...spsRbacSlices.reducer,
    // ...spsFileStorageSlices.reducer,
  },
};
