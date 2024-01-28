import { populate as fileUploadPopulate } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/populate";
import { populate as featurePopulate } from "../../../../../../../../contracts/src/lib/components/elements/feature/populate/index";

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
