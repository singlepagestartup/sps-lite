import { populate as fileUploadPopulate } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/populate";
import { populate as buttonPopulate } from "../../button/populate/index";

export const populate = {
  media: {
    populate: fileUploadPopulate,
  },
  buttons: {
    populate: buttonPopulate,
  },
};
