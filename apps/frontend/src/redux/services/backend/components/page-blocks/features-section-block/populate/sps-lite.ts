import { populate as featurePopulate } from "~redux/services/backend/components/elements/feature/populate";
import { populate as fileUploadPopulate } from "libs/modules/sps-file-storage/frontend/src/lib/redux/entities/file/populate";

export const populate = {
  features: {
    populate: featurePopulate,
  },
  media: {
    populate: fileUploadPopulate,
  },
  additional_media: {
    populate: fileUploadPopulate,
  },
};
