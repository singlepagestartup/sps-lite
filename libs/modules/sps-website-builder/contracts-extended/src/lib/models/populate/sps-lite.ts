import { populate as alertBlockPopulate } from "@sps/sps-website-builder-alert-block-contracts";
import { populate as ctaSectionBlockPopulate } from "../cta-section-block/populate";
import { populate as faqsBlockPopulate } from "../faq-block/populate";
import { populate as featuresSectionBlockPopulate } from "../features-section-block/populate";
import { populate as footerBlockPopulate } from "../footer-block/populate";
import { populate as headerSectionBlockPopulate } from "../header-section-block/populate";
import { populate as heroSectionBlockPopulate } from "@sps/sps-website-builder-hero-section-block-contracts";
import { populate as incentivesBlockPopulate } from "../incentives-block/populate";
import { populate as logotypesCloudBlockPopulate } from "../logotypes-cloud-block/populate";
import { populate as navbarBlockPopulate } from "../navbar-block/populate";
import { populate as notFoundBlockPopulate } from "../not-found-block/populate";
import { populate as sliderBlockPopulate } from "../slider-block/populate";

export const populate = {
  ...alertBlockPopulate,
  ...ctaSectionBlockPopulate,
  ...faqsBlockPopulate,
  ...featuresSectionBlockPopulate,
  ...footerBlockPopulate,
  ...headerSectionBlockPopulate,
  ...heroSectionBlockPopulate,
  ...incentivesBlockPopulate,
  ...logotypesCloudBlockPopulate,
  ...navbarBlockPopulate,
  ...notFoundBlockPopulate,
  ...sliderBlockPopulate,
};
