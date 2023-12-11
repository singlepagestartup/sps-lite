import { populate as alertBlockPopulate } from "../alert-block/populate";
import { populate as contactSectionBlockPopulate } from "../contact-section-block/populate";
import { populate as ctaSectionBlockPopulate } from "../cta-section-block/populate";
import { populate as faqsBlockPopulate } from "../faq-block/populate";
import { populate as featuresSectionBlockPopulate } from "../features-section-block/populate";
import { populate as footerBlockPopulate } from "../footer-block/populate";
import { populate as headerSectionBlockPopulate } from "../header-section-block/populate";
import { populate as heroSectionBlockPopulate } from "../hero-section-block/populate";
import { populate as incentivesBlockPopulate } from "../incentives-block/populate";
import { populate as logotypesCloudBlockPopulate } from "../logotypes-cloud-block/populate";
import { populate as navbarBlockPopulate } from "../navbar-block/populate";
import { populate as notFoundBlockPopulate } from "../not-found-block/populate";
import { populate as pricingBlockPopulate } from "../pricing-block/populate";
import { populate as reviewsListBlockPopulate } from "../reviews-list-block/populate";
import { populate as sliderBlockPopulate } from "../slider-block/populate";

export const populate = {
  ...alertBlockPopulate,
  ...contactSectionBlockPopulate,
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
  ...pricingBlockPopulate,
  ...reviewsListBlockPopulate,
  ...sliderBlockPopulate,
};
