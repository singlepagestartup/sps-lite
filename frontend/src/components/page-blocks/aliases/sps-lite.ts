import HeaderSection from "~components/page-blocks/header-section-block";
import HeroSection from "~components/page-blocks/hero-section-block";
import ReviewsList from "~components/page-blocks/reviews-list-block";
import Faq from "~components/page-blocks/faq-block";
import Slider from "~components/page-blocks/slider-block";
import NotFound from "~components/page-blocks/not-found-block";
import ContactSecton from "~components/page-blocks/contact-section-block";
import Incentive from "~components/page-blocks/incentives-block";
import CtaSection from "~components/page-blocks/cta-section-block";
import Pricing from "~components/page-blocks/pricing-block";
import ReviewsTable from "~components/page-blocks/reviews-table-block";
import FeaturesSection from "~components/page-blocks/features-section-block";
import LogotypesCloud from "~components/page-blocks/logotypes-cloud-block";
import Navbar from "~components/page-blocks/navbar-block";
import Button from "~components/elements/button";
import Footer from "~components/page-blocks/footer-block";
import ButtonsArray from "~components/elements/buttons-array";
import Alert from "~components/page-blocks/alert-block";

export const pageBlockComponents = {
  ["page-blocks.header-section-block"]: HeaderSection,
  ["page-blocks.hero-section-block"]: HeroSection,
  ["page-blocks.reviews-list-block"]: ReviewsList,
  ["page-blocks.features-section-block"]: FeaturesSection,
  ["page-blocks.faqs-block"]: Faq,
  ["page-blocks.logotypes-cloud-block"]: LogotypesCloud,
  ["page-blocks.slider-block"]: Slider,
  ["page-blocks.not-found-block"]: NotFound,
  ["page-blocks.contact-section-block"]: ContactSecton,
  ["page-blocks.incentives-block"]: Incentive,
  ["page-blocks.cta-section-block"]: CtaSection,
  ["page-blocks.pricing-block"]: Pricing,
  ["page-blocks.reviews-table-block"]: ReviewsTable,
  ["page-blocks.navbar-block"]: Navbar,
  ["page-blocks.footer-block"]: Footer,
  ["elements.buttons-array"]: ButtonsArray,
  ["elements.button"]: Button,
  ["page-blocks.alert-block"]: Alert,
};
