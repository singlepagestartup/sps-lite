import { populate as parentPopulate } from "@sps/sps-ecommerce-models-order-contracts";
import { populate as cartPopulate } from "@sps/sps-ecommerce-models-cart-contracts";
import { populate as invoicePopulate } from "@sps/sps-billing-models-invoice-contracts";
import { populate as orderProductPopulate } from "@sps/sps-ecommerce-models-order-product-contracts";

export const populate = {
  ...parentPopulate,
  cart: {
    populate: cartPopulate,
  },
  order_products: {
    populate: orderProductPopulate,
  },
  invoice: {
    populate: invoicePopulate,
  },
};
