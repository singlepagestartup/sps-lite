import { populate as parentPopulate } from "@sps/sps-website-builder-page-contracts";
import { populate as layoutPopulate } from "@sps/sps-website-builder-contracts/lib/models/layout/populate";
import { populate as metatagPopulate } from "@sps/sps-website-builder-contracts/lib/models/metatag/populate";
import { populate as alertBlockPopulate } from "@sps/sps-website-builder-alert-block-contracts";
import { populate } from "@sps/sps-website-builder-cta-section-block-contracts";
import { populate } from "@sps/sps-website-builder-faq-block-contracts";
import { populate } from "@sps/sps-website-builder-features-section-block-contracts";
import { populate } from "@sps/sps-website-builder-header-section-block-contracts";
import { populate as heroSectionBlockPopulate } from "@sps/sps-website-builder-hero-section-block-contracts";
import { populate as incentivesBlockPopulate } from "@sps/sps-website-builder-contracts/lib/models/incentives-block/populate";
import { populate as logotypesCloudBlockPopulate } from "@sps/sps-website-builder-contracts/lib/models/logotypes-cloud-block/populate";
import { populate as notFoundBlockPopulate } from "@sps/sps-website-builder-contracts/lib/models/not-found-block/populate";
import { populate as sliderBlockPopulate } from "@sps/sps-website-builder-contracts/lib/models/slider-block/populate";
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
