import { api as attributeApi } from "../../models/attribute/api/client";
import { api as attributeKeyApi } from "../../models/attribute-key/api/client";
import { api as subscriptionApi } from "../../models/subscription/api/client";
import {
  api as tierApi,
  subscription as tierSubscription,
} from "../../models/tier/api/client";

export const slices = {
  middlewares: [
    attributeApi.middleware,
    attributeKeyApi.middleware,
    subscriptionApi.middleware,
    tierApi.middleware,
  ],
  reducer: {
    [attributeApi.reducerPath]: attributeApi.reducer,
    [attributeKeyApi.reducerPath]: attributeKeyApi.reducer,
    [subscriptionApi.reducerPath]: subscriptionApi.reducer,
    [tierApi.reducerPath]: tierApi.reducer,
  },
  subscriptions: [tierSubscription],
};
