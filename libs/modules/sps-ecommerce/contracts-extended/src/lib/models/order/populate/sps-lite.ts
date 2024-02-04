import { populate as parentPopulate } from "@sps/sps-ecommerce-contracts/lib/models/order/populate";
import { populate as cartPopulate } from "@sps/sps-ecommerce-contracts/lib/models/cart/populate";
import { populate as orderProductPopulate } from "@sps/sps-ecommerce-contracts/lib/models/order-product/populate";

export const populate = {
  ...parentPopulate,
  cart: {
    populate: cartPopulate,
  },
  order_products: {
    populate: orderProductPopulate,
  },
};
