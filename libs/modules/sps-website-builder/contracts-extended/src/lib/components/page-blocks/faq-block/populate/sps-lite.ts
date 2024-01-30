import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/faq-block/populate";
import { populate as faqPopulate } from "@sps/sps-website-builder-contracts/lib/components/elements/faq/populate";

export const populate = {
  ...parentPopulate,
  faqs: {
    populate: faqPopulate,
  },
};
