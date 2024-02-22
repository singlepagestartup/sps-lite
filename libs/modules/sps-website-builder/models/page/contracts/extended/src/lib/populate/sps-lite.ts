import { populate as parentPopulate } from "@sps/sps-website-builder-models-page-contracts";
import { populate as layoutPopulate } from "@sps/sps-website-builder-models-layout-contracts";
import { populate as metatagPopulate } from "@sps/sps-website-builder-models-metatag-contracts";
import { populate as alertBlockPopulate } from "@sps/sps-website-builder-models-alert-block-contracts";
import { populate as ctaSectionBlockPopulate } from "@sps/sps-website-builder-models-cta-section-block-contracts";
import { populate as faqBlockPopulate } from "@sps/sps-website-builder-models-faq-block-contracts";
import { populate as featuresSectionBlockPopulate } from "@sps/sps-website-builder-models-features-section-block-contracts";
import { populate as headerSectionBlockPopulate } from "@sps/sps-website-builder-models-header-section-block-contracts";
import { populate as heroSectionBlockPopulate } from "@sps/sps-website-builder-models-hero-section-block-contracts";
import { populate as incentivesBlockPopulate } from "@sps/sps-website-builder-models-incentives-block-contracts";
import { populate as logotypesCloudBlockPopulate } from "@sps/sps-website-builder-models-logotypes-cloud-block-contracts";
import { populate as notFoundBlockPopulate } from "@sps/sps-website-builder-models-not-found-block-contracts";
import { populate as sliderBlockPopulate } from "@sps/sps-website-builder-models-slider-block-contracts";
import { populate as buttonPopulate } from "@sps/sps-website-builder-models-button-contracts";
import { populate as buttonsArrayPopulate } from "@sps/sps-website-builder-models-buttons-array-contracts";

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
