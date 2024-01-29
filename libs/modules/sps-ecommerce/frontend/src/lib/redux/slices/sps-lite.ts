import { api as attributeApi } from "../entities/attribute";
import { api as attributeKeyApi } from "../entities/attribute-key";
import { api as cartApi } from "../entities/cart";
import { api as orderApi } from "../entities/order";
import { api as orderProductApi } from "../entities/order-product";
import { api as productApi } from "../entities/product";

export const slices = {
  middlewares: [
    attributeApi.middleware,
    attributeKeyApi.middleware,
    cartApi.middleware,
    orderApi.middleware,
    orderProductApi.middleware,
    productApi.middleware,
  ],
  reducer: {
    [attributeApi.reducerPath]: attributeApi.reducer,
    [attributeKeyApi.reducerPath]: attributeKeyApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [orderProductApi.reducerPath]: orderProductApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
};
