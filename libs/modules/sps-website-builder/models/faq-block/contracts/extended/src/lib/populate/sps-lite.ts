import { populate as parentPopulate } from "@sps/sps-website-builder-models-faq-block-contracts";
import { populate as faqPopulate } from "@sps/sps-website-builder-models-faq-contracts";

export const populate = {
  ...parentPopulate,
  faqs: {
    populate: faqPopulate,
  },
};
