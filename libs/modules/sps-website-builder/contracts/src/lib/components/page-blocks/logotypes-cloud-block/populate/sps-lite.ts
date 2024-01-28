import { populate as fileUploadPopulate } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/populate";
import { populate as buttonPopulate } from "../../../../../../../../contracts/src/lib/components/elements/button/populate/index";
import { populate as logotypePopulate } from "../../../../../../../../contracts/src/lib/components/elements/logotype/populate/index";

export const populate = {
  logotypes: {
    populate: logotypePopulate,
  },
  buttons: {
    populate: buttonPopulate,
  },
};
