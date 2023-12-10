import { populate as fileUploadPopulate } from "~redux/services/backend/extensions/upload/api/file/populate";

export const populate = {
  media: {
    populate: fileUploadPopulate,
  },
  additionalMedia: {
    populate: fileUploadPopulate,
  },
};
