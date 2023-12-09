import { populate as fileUploadPopulate } from "~redux/services/backend/models/upload/populate";
import { populate as tierPopulate } from "~redux/services/backend/models/tier/populate";

export const populate = {
  tiers: {
    populate: tierPopulate,
  },
  media: {
    populate: fileUploadPopulate,
  },
  additionalMedia: {
    populate: fileUploadPopulate,
  },
};
