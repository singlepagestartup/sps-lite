import { populate as cartPopulate } from "~redux/services/backend/extensions/sps-ecommerce/api/cart/populate";
import { populate as orderProductPopulate } from "~redux/services/backend/extensions/sps-ecommerce/api/order-product/populate";

export const populate = {
  cart: {
    populate: cartPopulate,
  },
  order_products: {
    populate: orderProductPopulate,
  },
};
