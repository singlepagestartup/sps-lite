import { populate as buttonsArrayPopulate } from "~redux/services/backend/components/elements/buttons-array/populate";
import { populate as logotypePopulate } from "~redux/services/backend/components/elements/logotype/populate";

export const populate = {
  logotype: {
    populate: logotypePopulate,
  },
  buttons_arrays: {
    populate: buttonsArrayPopulate,
  },
  additional_buttons_arrays: {
    populate: buttonsArrayPopulate,
  },
  extra_buttons_arrays: {
    populate: buttonsArrayPopulate,
  },
};
