import HeaderSections from "~components/page-blocks/header-sections";
import HeroSections from "~components/page-blocks/hero-sections";
import Reviews from "~components/page-blocks/reviews";
import FeatureSections from "~components/page-blocks/feature-sections";
import Faqs from "~components/page-blocks/faqs";
import LogoClouds from "~components/page-blocks/logo-clouds";
import Slider from "~components/page-blocks/slider";
import Forms from "~components/page-blocks/forms";
import NotFound from "~components/page-blocks/not-found";
import ContactSectons from "~components/page-blocks/contact-sections";
import Incentives from "~components/page-blocks/incentives";
import CtaSections from "~components/page-blocks/cta-sections";
import Pricings from "~components/page-blocks/pricings";
import ReviewsTables from "~components/page-blocks/reviews-tables";

const liteBlockComponents = {
  [`page-blocks.header-section-block`]: HeaderSections,
  [`page-blocks.hero-section-block`]: HeroSections,
  [`page-blocks.reviews-block`]: Reviews,
  [`page-blocks.feature-section-block`]: FeatureSections,
  [`page-blocks.faqs-block`]: Faqs,
  [`page-blocks.logo-cloud-block`]: LogoClouds,
  [`page-blocks.slider-block`]: Slider,
  [`page-blocks.form-block`]: Forms,
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
