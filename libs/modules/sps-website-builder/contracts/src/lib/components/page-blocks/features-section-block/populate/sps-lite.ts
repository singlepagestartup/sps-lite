import { populate as featurePopulate } from "../../../elements/feature/populate";
// import { populate as fileUploadPopulate } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/populate";

export const populate = {
  features: {
    populate: featurePopulate,
  },
  media: {
    populate: "*",
  },
  additional_media: {
    populate: "*",
  },
};
