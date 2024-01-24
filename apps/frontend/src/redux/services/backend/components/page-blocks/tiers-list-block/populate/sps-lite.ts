import { populate as fileUploadPopulate } from "libs/modules/sps-file-storage/frontend/src/lib/redux/entities/file/populate";
import { populate as tierPopulate } from "@sps/sps-subscription-frontend/lib/redux/entities/tier/populate";

export const populate = {
  tiers: {
    populate: tierPopulate,
  },
  media: {
    populate: fileUploadPopulate,
  },
  additional_media: {
    populate: fileUploadPopulate,
  },
};
