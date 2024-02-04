import { Component as FaqBlock } from "../../../models/faq-block/component";
import { Component as FeaturesSectionBlock } from "../../../models/features-section-block/component";
import { Component as FooterBlock } from "../../../models/footer-block/component";
import { Component as HeaderSectionBlock } from "../../../models/header-section-block/component";
import { Component as HeroSectionBlock } from "../../../models/hero-section-block/component";
import { Component as LogotypesCloudBlock } from "../../../models/logotypes-cloud-block/component";
import { Component as NotFoundBlock } from "../../../models/not-found-block/component";
import { Component as IncentivesBlock } from "../../../models/incentives-block/component";
import { Component as CtaSectionBlock } from "../../../models/cta-section-block/component";
import { Component as AlertBlock } from "../../../models/alert-block/component";
import { Component as SliderBlock } from "../../../models/slider-block/component";
import { Component as NavbarBlock } from "../../../models/navbar-block/component";

export const pageBlocks = {
  "page-blocks.footer-block": FooterBlock,
  "page-blocks.header-section-block": HeaderSectionBlock,
  "page-blocks.hero-section-block": HeroSectionBlock,
  "page-blocks.features-section-block": FeaturesSectionBlock,
  "page-blocks.faqs-block": FaqBlock,
  "page-blocks.logotypes-cloud-block": LogotypesCloudBlock,
  "page-blocks.slider-block": SliderBlock,
  "page-blocks.not-found-block": NotFoundBlock,
  "page-blocks.incentives-block": IncentivesBlock,
  "page-blocks.cta-section-block": CtaSectionBlock,
  "page-blocks.alert-block": AlertBlock,
  "page-blocks.navbar-block": NavbarBlock,
};
