import { populate as mediaPopulate } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/populate";
import { populate as attributePopulate } from "../../attribute/populate";

export const populate = {
  media: {
    populate: mediaPopulate,
  },
  attributes: {
    populate: attributePopulate,
  },
};
