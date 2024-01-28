import { populate as fileUploadPopulate } from "@sps/sps-file-storage-frontend/lib/redux/entities/file/populate";
// import { populate as buttonsArrayPopulate } from "@sps/sps-website-builder-frontend/lib/redux/components/elements/buttons-array/populate";
import { populate as formPopulate } from "../../../../entities/form/populate";

export const populate = {
  buttons_brray: {
    populate: "*",
  },
  media: {
    populate: fileUploadPopulate,
  },
  additional_media: {
    populate: fileUploadPopulate,
  },
  form: {
    populate: formPopulate,
  },
};
