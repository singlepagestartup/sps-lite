import { populate as mediaPopulate } from "~redux/services/backend/extensions/upload/api/file/populate";
import { populate as attributePopulate } from "~redux/services/backend/extensions/sps-ecommerce/api/attribute/populate";

export const populate = {
  media: {
    populate: mediaPopulate,
  },
  attributes: {
    populate: attributePopulate,
  },
};
