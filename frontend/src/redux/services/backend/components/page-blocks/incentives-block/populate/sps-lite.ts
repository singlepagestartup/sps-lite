import { populate as fileUploadPopulate } from "~redux/services/backend/models/upload/populate";
import { populate as featurePopulate } from "~redux/services/backend/components/elements/feature/populate";

export const populate = {
  features: {
    populate: featurePopulate,
  },
  media: {
    populate: fileUploadPopulate,
  },
  additionalMedia: {
    populate: fileUploadPopulate,
  },
};
