import { populate as parentPopulate } from "@sps/sps-ecommerce-contracts/lib/entities/order-product/populate";
import { populate as orderPopulate } from "@sps/sps-ecommerce-contracts/lib/entities/order/populate";
import { populate as productPopulate } from "@sps/sps-ecommerce-contracts/lib/entities/product/populate";
import { populate as attributePopulate } from "@sps/sps-ecommerce-contracts/lib/entities/attribute/populate";

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
