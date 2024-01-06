import { populate as fileUploadPopulate } from "~redux/services/backend/extensions/upload/api/file/populate";

export const populate = {
  options: {
    populate: "*",
    media: {
      populate: fileUploadPopulate,
    },
    additional_media: {
      populate: fileUploadPopulate,
    },
  },
  media: {
    populate: fileUploadPopulate,
  },
  additional_media: {
    populate: fileUploadPopulate,
  },
  extra_media: {
    populate: fileUploadPopulate,
  },
};
