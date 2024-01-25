import { populate as fileUploadPopulate } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/populate";

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
