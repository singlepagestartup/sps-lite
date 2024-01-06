import { populate as fileUploadPopulate } from "~redux/services/backend/extensions/upload/api/file/populate";
import { populate as featurePopulate } from "~redux/services/backend/components/elements/feature/populate";

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
