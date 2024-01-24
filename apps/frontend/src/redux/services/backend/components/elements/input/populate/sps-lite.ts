import { populate as fileUploadPopulate } from "libs/modules/sps-file-storage/frontend/src/lib/redux/entities/file/populate";

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
