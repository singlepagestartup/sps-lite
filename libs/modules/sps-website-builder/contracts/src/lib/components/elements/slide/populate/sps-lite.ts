// import { populate as fileUploadPopulate } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/populate";
import { populate as buttonPopulate } from "../../button/populate";

export const populate = {
  media: {
    populate: "*",
  },
  buttons: {
    populate: buttonPopulate,
  },
};
