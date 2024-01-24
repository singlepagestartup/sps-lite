import { api as attributeApi } from "../entities/attribute/api";
import { api as attributeKeyApi } from "../entities/attribute-key/api";
import { api as subscriptionApi } from "../entities/subscription/api";
import { api as tierApi } from "../entities/tier/api";

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
};
