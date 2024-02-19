import { populate as parentPopulate } from "@sps/sps-website-builder-page-contracts";
import { populate as layoutPopulate } from "@sps/sps-website-builder-layout-contracts";
import { populate as metatagPopulate } from "@sps/sps-website-builder-metatag-contracts";
import { populate as alertBlockPopulate } from "@sps/sps-website-builder-alert-block-contracts";
import { populate as ctaSectionBlockPopulate } from "@sps/sps-website-builder-cta-section-block-contracts";
import { populate as faqBlockPopulate } from "@sps/sps-website-builder-faq-block-contracts";
import { populate as featuresSectionBlockPopulate } from "@sps/sps-website-builder-features-section-block-contracts";
import { populate as headerSectionBlockPopulate } from "@sps/sps-website-builder-header-section-block-contracts";
import { populate as heroSectionBlockPopulate } from "@sps/sps-website-builder-hero-section-block-contracts";
import { populate as incentivesBlockPopulate } from "@sps/sps-website-builder-incentives-block-contracts";
import { populate as logotypesCloudBlockPopulate } from "@sps/sps-website-builder-logotypes-cloud-block-contracts";
import { populate as notFoundBlockPopulate } from "@sps/sps-website-builder-not-found-block-contracts";
import { populate as sliderBlockPopulate } from "@sps/sps-website-builder-slider-block-contracts";
import { populate as buttonPopulate } from "@sps/sps-website-builder-button-contracts";
import { populate as buttonsArrayPopulate } from "@sps/sps-website-builder-buttons-array-contracts";

const pageBlockPopulate = {
  ...alertBlockPopulate,
  ...ctaSectionBlockPopulate,
  ...faqBlockPopulate,
  ...featuresSectionBlockPopulate,
  ...headerSectionBlockPopulate,
  ...heroSectionBlockPopulate,
  ...incentivesBlockPopulate,
  ...logotypesCloudBlockPopulate,
  ...notFoundBlockPopulate,
  ...sliderBlockPopulate,
  ...buttonPopulate,
  ...buttonsArrayPopulate,
};

export const populate = {
  ...parentPopulate,
  layout: {
    populate: layoutPopulate,
  },
  metatag: {
    populate: metatagPopulate,
  },
  page_blocks: {
    populate: pageBlockPopulate,
  },
};
