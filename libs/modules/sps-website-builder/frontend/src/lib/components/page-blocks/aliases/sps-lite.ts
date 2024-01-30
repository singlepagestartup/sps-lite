import { Element as Button } from "../../elements/button/component";
import { Element as ButtonsArray } from "../../elements/buttons-array/component";
import { PageBlock as FaqBlock } from "../faq-block/component";
import { PageBlock as FeaturesSectionBlock } from "../features-section-block/component";
import { PageBlock as FooterBlock } from "../footer-block/component";
import { PageBlock as HeaderSectionBlock } from "../header-section-block/component";
import { PageBlock as HeroSectionBlock } from "../hero-section-block/component";
import { PageBlock as LogotypesCloudBlock } from "../logotypes-cloud-block/component";
import { PageBlock as NotFoundBlock } from "../not-found-block/component";
import { PageBlock as IncentivesBlock } from "../incentives-block/component";
import { PageBlock as CtaSectionBlock } from "../cta-section-block/component";
import { PageBlock as AlertBlock } from "../alert-block/component";
import { PageBlock as SliderBlock } from "../slider-block/component";
import { PageBlock as NavbarBlock } from "../navbar-block/component";

export const pageBlockComponents = {
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
  "elements.buttons-array": ButtonsArray,
  "elements.button": Button,
  "page-blocks.navbar-block": NavbarBlock,
};
