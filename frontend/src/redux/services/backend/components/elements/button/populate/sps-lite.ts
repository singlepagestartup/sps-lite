import { populate as fileUploadPopulate } from "~redux/services/backend/models/upload/populate";

export const populate = {
  media: {
    populate: fileUploadPopulate,
  },
  additional_media: {
    populate: fileUploadPopulate,
  },
  flyout: {
    populate: "*",
  },
};
