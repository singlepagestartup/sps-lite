import { populate as fileUploadPopulate } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/populate";

export const populate = {
  attributes: {
    populate: {
      media: { populate: fileUploadPopulate },
      additional_media: { populate: fileUploadPopulate },
    },
  },
};
