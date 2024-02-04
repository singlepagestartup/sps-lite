import { populate as parentPopulate } from "@sps/sps-ecommerce-contracts/lib/models/order-product/populate";
import { populate as orderPopulate } from "@sps/sps-ecommerce-contracts/lib/models/order/populate";
import { populate as productPopulate } from "@sps/sps-ecommerce-contracts/lib/models/product/populate";
import { populate as attributePopulate } from "@sps/sps-ecommerce-contracts/lib/models/attribute/populate";

export const populate = {
  ...parentPopulate,
  order: {
    populate: orderPopulate,
  },
  product: {
    populate: productPopulate,
  },
  attributes: {
    populate: attributePopulate,
  },
};
