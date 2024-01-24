import { api as attributeApi } from "../entities/attribute/api";
import { api as attributeKeyApi } from "../entities/attribute-key/api";
import { api as cartApi } from "../entities/cart/api";
import { api as orderApi } from "../entities/order/api";
import { api as orderProductApi } from "../entities/order-product/api";
import { api as productApi } from "../entities/product/api";

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
