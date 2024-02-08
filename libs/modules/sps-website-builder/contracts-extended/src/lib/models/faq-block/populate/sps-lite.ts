import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/models/faq-block/populate";
import { populate as faqPopulate } from "@sps/sps-website-builder-contracts/lib/models/faq/populate";

export const populate = {
  ...parentPopulate,
  faqs: {
    populate: faqPopulate,
  },
};
