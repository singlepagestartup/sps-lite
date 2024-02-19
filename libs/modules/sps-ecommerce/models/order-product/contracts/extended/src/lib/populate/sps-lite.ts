import { populate as parentPopulate } from "@sps/sps-ecommerce-order-product-contracts";
import { populate as orderPopulate } from "@sps/sps-ecommerce-order-contracts";
import { populate as productPopulate } from "@sps/sps-ecommerce-product-contracts";
import { populate as attributePopulate } from "@sps/sps-ecommerce-attribute-contracts";

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
