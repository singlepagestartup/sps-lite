import FaqBlock from "../faq-block";
import { Element as Button } from "../../elements/button";
import { Element as ButtonsArray } from "../../elements/buttons-array";
import FeaturesSectionBlock from "../features-section-block";
import FooterBlock from "../footer-block";
import HeaderSectionBlock from "../header-section-block";
import HeroSectionBlock from "../hero-section-block";
import LogotypesCloudBlock from "../logotypes-cloud-block";
import NotFoundBlock from "../not-found-block";
import IncentivesBlock from "../incentives-block";
import CtaSectionBlock from "../cta-section-block";
import AlertBlock from "../alert-block";
import SliderBlock from "../slider-block";
import NavbarBlock from "../navbar-block";

export const pageBlocks = {
  ["page-blocks.footer-block"]: FooterBlock,
  ["page-blocks.header-section-block"]: HeaderSectionBlock,
  ["page-blocks.hero-section-block"]: HeroSectionBlock,
  ["page-blocks.features-section-block"]: FeaturesSectionBlock,
  ["page-blocks.faqs-block"]: FaqBlock,
  ["page-blocks.logotypes-cloud-block"]: LogotypesCloudBlock,
  ["page-blocks.slider-block"]: SliderBlock,
  ["page-blocks.not-found-block"]: NotFoundBlock,
  ["page-blocks.incentives-block"]: IncentivesBlock,
  ["page-blocks.cta-section-block"]: CtaSectionBlock,
  ["page-blocks.alert-block"]: AlertBlock,
  ["elements.buttons-array"]: ButtonsArray,
  ["elements.button"]: Button,
  ["page-blocks.navbar-block"]: NavbarBlock,
};
