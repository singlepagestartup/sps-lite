import HeaderSections from "~components/page-blocks/header-sections";
import HeroSections from "~components/page-blocks/hero-sections";
import Reviews from "~components/page-blocks/reviews";
import Faqs from "~components/page-blocks/faqs";
import Slider from "~components/page-blocks/slider";
import NotFound from "~components/page-blocks/not-found";
import ContactSectons from "~components/page-blocks/contact-sections";
import Incentives from "~components/page-blocks/incentives";
import CtaSections from "~components/page-blocks/cta-sections";
import Pricings from "~components/page-blocks/pricings";
import ReviewsTables from "~components/page-blocks/reviews-tables";
import FeaturesSections from "~components/page-blocks/features-sections";
import LogotypesClouds from "~components/page-blocks/logotypes-clouds";

const liteBlockComponents = {
  [`page-blocks.header-section-block`]: HeaderSections,
  [`page-blocks.hero-section-block`]: HeroSections,
  [`page-blocks.reviews-block`]: Reviews,
  [`page-blocks.features-section-block`]: FeaturesSections,
  [`page-blocks.faqs-block`]: Faqs,
  [`page-blocks.logotypes-cloud-block`]: LogotypesClouds,
  [`page-blocks.slider-block`]: Slider,
  [`page-blocks.not-found-block`]: NotFound,
  [`page-blocks.contact-section-block`]: ContactSectons,
  [`page-blocks.incentives-block`]: Incentives,
  [`page-blocks.cta-section-block`]: CtaSections,
  [`page-blocks.pricing-block`]: Pricings,
  [`page-blocks.reviews-table-block`]: ReviewsTables,
};

export const pageBlockComponents = {
  ...liteBlockComponents,
};
