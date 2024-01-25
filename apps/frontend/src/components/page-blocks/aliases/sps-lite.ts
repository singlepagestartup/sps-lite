import HeaderSection from "../header-section-block";
import HeroSection from "../hero-section-block";
import ReviewsList from "../reviews-list-block";
import Faq from "../faq-block";
import Slider from "../slider-block";
import NotFound from "../not-found-block";
import ContactSecton from "../contact-section-block";
import Incentive from "../incentives-block";
import CtaSection from "../cta-section-block";
import TiersListBlock from "../tiers-list-block";
import ReviewsTable from "../reviews-table-block";
import FeaturesSection from "../features-section-block";
import LogotypesCloud from "../logotypes-cloud-block";
import Navbar from "../navbar-block";
import Button from "../../elements/button";
import Footer from "../footer-block";
import ButtonsArray from "../../elements/buttons-array";
import Alert from "../alert-block";
import CheckoutFormBlock from "../checkout-form-block";
import ProductsListBlock from "../products-list-block";
import ShoppingCartBlock from "../shopping-cart-block";
import EditSubscriptionBlock from "../edit-subscription-block";

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
  ["page-blocks.tiers-list-block"]: TiersListBlock,
  ["page-blocks.reviews-table-block"]: ReviewsTable,
  ["page-blocks.navbar-block"]: Navbar,
  ["page-blocks.footer-block"]: Footer,
  ["elements.buttons-array"]: ButtonsArray,
  ["elements.button"]: Button,
  ["page-blocks.alert-block"]: Alert,
  ["page-blocks.checkout-form-block"]: CheckoutFormBlock,
  ["page-blocks.products-list-block"]: ProductsListBlock,
  ["page-blocks.shopping-cart-block"]: ShoppingCartBlock,
  ["page-blocks.edit-subscription-block"]: EditSubscriptionBlock,
};
