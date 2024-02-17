import { populate as parentPopulate } from "@sps/sps-website-builder-faq-block-contracts";
import { populate as faqPopulate } from "@sps/sps-website-builder-faq-contracts";

export const populate = {
  ...parentPopulate,
  faqs: {
    populate: faqPopulate,
  },
};
