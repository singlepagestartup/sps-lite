import { populate as attributePopulate } from "../../attribute/populate";

export const populate = {
  media: {
    populate: "*",
  },
  attributes: {
    populate: attributePopulate,
  },
};
