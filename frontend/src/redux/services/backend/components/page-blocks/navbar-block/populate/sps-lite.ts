import { populate as buttonPopulate } from "~redux/services/backend/components/elements/button/populate";
import { populate as logotypePopulate } from "~redux/services/backend/components/elements/logotype/populate";

export const populate = {
  logotype: {
    populate: logotypePopulate,
  },
  buttons: {
    populate: buttonPopulate,
  },
  additional_buttons: {
    populate: buttonPopulate,
  },
  extra_buttons: {
    populate: buttonPopulate,
  },
};
