import { populate as productPopulate } from "~redux/services/backend/extensions/sps-ecommerce/api/product/populate";
import { populate as attributePopulate } from "~redux/services/backend/extensions/sps-ecommerce/api/attribute/populate";

export const populate = {
  product: {
    populate: productPopulate,
  },
  attributes: {
    populate: attributePopulate,
  },
};
