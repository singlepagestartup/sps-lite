import { populate as cartPopulate } from "../../cart/populate";
import { populate as orderProductPopulate } from "../../order-product/populate";

export const populate = {
  cart: {
    populate: cartPopulate,
  },
  order_products: {
    populate: orderProductPopulate,
  },
};
