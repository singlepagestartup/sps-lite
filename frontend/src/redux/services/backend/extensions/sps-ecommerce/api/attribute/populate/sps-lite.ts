import { populate as mediaPopulate } from "~redux/services/backend/extensions/upload/api/file/populate";

export const populate = {
  media: {
    populate: mediaPopulate,
  },
  attribute_key: "*",
  currency: "*",
};
