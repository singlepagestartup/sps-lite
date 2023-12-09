import { populate as buttonsArrayPopulate } from "~redux/services/backend/components/elements/buttons-array/populate";
import { populate as logotypePopulate } from "~redux/services/backend/components/elements/logotype/populate";

export const populate = {
  logotype: {
    populate: logotypePopulate,
  },
  buttonsArrays: {
    populate: buttonsArrayPopulate,
  },
  additionalButtonsArrays: {
    populate: buttonsArrayPopulate,
  },
  extraButtonsArrays: {
    populate: buttonsArrayPopulate,
  },
};
