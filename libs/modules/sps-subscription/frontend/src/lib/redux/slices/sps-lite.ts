import { api as attributeApi } from "../entities/attribute";
import { api as attributeKeyApi } from "../entities/attribute-key";
import { api as subscriptionApi } from "../entities/subscription";
import { api as tierApi } from "../entities/tier";

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
