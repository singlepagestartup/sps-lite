import { api as attributeApi } from "../../models/attribute/api/client";
import { api as checkoutFormBlockApi } from "../../models/checkout-form-block/api/client";
import { api as productsListBlockApi } from "../../models/products-list-block/api/client";
import { api as shoppingCartBlockApi } from "../../models/shopping-cart-block/api/client";
import { api as attributeKeyApi } from "../../models/attribute-key/api/client";
import {
  api as cartApi,
  subscription as cartSubscription,
} from "../../models/cart/api/client";
import {
  api as orderApi,
  subscription as orderSubscription,
} from "../../models/order/api/client";
import {
  api as orderProductApi,
  subscription as orderProductSubscription,
} from "../../models/order-product/api/client";
import { api as productApi } from "../../models/product/api/client";

export const slices = {
  middlewares: [
    attributeApi.middleware,
    checkoutFormBlockApi.middleware,
    productsListBlockApi.middleware,
    shoppingCartBlockApi.middleware,
    attributeKeyApi.middleware,
    cartApi.middleware,
    orderApi.middleware,
    orderProductApi.middleware,
    productApi.middleware,
  ],
  reducer: {
    [attributeApi.reducerPath]: attributeApi.reducer,
    [checkoutFormBlockApi.reducerPath]: checkoutFormBlockApi.reducer,
    [productsListBlockApi.reducerPath]: productsListBlockApi.reducer,
    [shoppingCartBlockApi.reducerPath]: shoppingCartBlockApi.reducer,
    [attributeKeyApi.reducerPath]: attributeKeyApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [orderProductApi.reducerPath]: orderProductApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  subscriptions: [
    cartSubscription,
    orderSubscription,
    orderProductSubscription,
  ],
};
