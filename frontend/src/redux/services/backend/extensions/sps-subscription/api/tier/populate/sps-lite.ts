import { populate as featurePopulate } from "~redux/services/backend/components/elements/feature/populate";
import { populate as currencyPopulate } from "~redux/services/backend/extensions/sps-billing/api/currency/populate";
import { populate as buttonPopulate } from "~redux/services/backend/components/elements/button/populate";

export const populate = {
  features: {
    populate: featurePopulate,
  },
  currency: {
    populate: currencyPopulate,
  },
  buttons: {
    populate: buttonPopulate,
  },
};
