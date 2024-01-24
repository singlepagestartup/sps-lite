import { populate as productPopulate } from "../../product/populate";
import { populate as attributePopulate } from "../../attribute/populate";

export const populate = {
  product: {
    populate: productPopulate,
  },
  attributes: {
    populate: attributePopulate,
  },
};
