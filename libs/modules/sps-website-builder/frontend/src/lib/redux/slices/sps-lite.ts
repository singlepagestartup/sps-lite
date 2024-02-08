import { api as featureApi } from "../../models/feature/api/client";
import { api as logotypeApi } from "../../models/logotype/api/client";
import { api as alertBlockApi } from "../../models/alert-block/api/client";
import { api as ctaSectionBlockApi } from "../../models/cta-section-block/api/client";
import { api as faqBlockApi } from "../../models/faq-block/api/client";
import { api as featuresSectionBlockApi } from "../../models/features-section-block/api/client";
import { api as footerBlockApi } from "../../models/footer-block/api/client";
import { api as headerSectionBlockApi } from "../../models/header-section-block/api/client";
import { api as heroSectionBlockApi } from "../../models/hero-section-block/api/client";
import { api as incentivesBlockApi } from "../../models/incentives-block/api/client";
import { api as logotypesCloudBlockApi } from "../../models/logotypes-cloud-block/api/client";
import { api as navbarBlockApi } from "../../models/navbar-block/api/client";
import { api as notFoundBlockApi } from "../../models/not-found-block/api/client";
import { api as sliderBlockApi } from "../../models/slider-block/api/client";
import { api as footerApi } from "../../models/footer/api/client";
import { api as layoutApi } from "../../models/layout/api/client";
import { api as loaderApi } from "../../models/loader/api/client";
import { api as localeApi } from "../../models/locale/api/client";
import { api as metatagApi } from "../../models/metatag/api/client";
import { api as modalApi } from "../../models/modal/api/client";
import { api as navbarApi } from "../../models/navbar/api/client";
import { api as pageApi } from "../../models/page/api/client";
import { api as sidebarApi } from "../../models/sidebar/api/client";
import { api as slideOverApi } from "../../models/slide-over/api/client";
import { api as sliderApi } from "../../models/slider/api/client";
import { api as themeApi } from "../../models/theme/api/client";
import { api as topbarApi } from "../../models/topbar/api/client";
import { api as buttonApi } from "../../models/button/api/client";
import { api as buttonsArrayApi } from "../../models/buttons-array/api/client";
import { api as flyoutApi } from "../../models/flyout/api/client";
import { api as checkoutFormBlockApi } from "../../models/checkout-form-block/api/client";
import { api as productsListBlockApi } from "../../models/products-list-block/api/client";
import { api as shoppingCartBlockApi } from "../../models/shopping-cart-block/api/client";
import { api as contactSectionBlockApi } from "../../models/contact-section-block/api/client";
import { api as reviewsListBlockApi } from "../../models/reviews-list-block/api/client";
import { api as reviewsTableBlockApi } from "../../models/reviews-table-block/api/client";

export const slices = {
  middlewares: [
    featureApi.middleware,
    logotypeApi.middleware,
    alertBlockApi.middleware,
    ctaSectionBlockApi.middleware,
    faqBlockApi.middleware,
    featuresSectionBlockApi.middleware,
    footerBlockApi.middleware,
    headerSectionBlockApi.middleware,
    heroSectionBlockApi.middleware,
    incentivesBlockApi.middleware,
    logotypesCloudBlockApi.middleware,
    navbarBlockApi.middleware,
    notFoundBlockApi.middleware,
    sliderBlockApi.middleware,
    footerApi.middleware,
    layoutApi.middleware,
    loaderApi.middleware,
    metatagApi.middleware,
    modalApi.middleware,
    navbarApi.middleware,
    pageApi.middleware,
    sidebarApi.middleware,
    slideOverApi.middleware,
    sliderApi.middleware,
    themeApi.middleware,
    topbarApi.middleware,
    localeApi.middleware,
    buttonApi.middleware,
    buttonsArrayApi.middleware,
    flyoutApi.middleware,
    checkoutFormBlockApi.middleware,
    productsListBlockApi.middleware,
    shoppingCartBlockApi.middleware,
    contactSectionBlockApi.middleware,
    reviewsListBlockApi.middleware,
    reviewsTableBlockApi.middleware,
  ],
  reducer: {
    [featureApi.reducerPath]: featureApi.reducer,
    [logotypeApi.reducerPath]: logotypeApi.reducer,
    [alertBlockApi.reducerPath]: alertBlockApi.reducer,
    [ctaSectionBlockApi.reducerPath]: ctaSectionBlockApi.reducer,
    [faqBlockApi.reducerPath]: faqBlockApi.reducer,
    [featuresSectionBlockApi.reducerPath]: featuresSectionBlockApi.reducer,
    [footerBlockApi.reducerPath]: footerBlockApi.reducer,
    [headerSectionBlockApi.reducerPath]: headerSectionBlockApi.reducer,
    [heroSectionBlockApi.reducerPath]: heroSectionBlockApi.reducer,
    [incentivesBlockApi.reducerPath]: incentivesBlockApi.reducer,
    [logotypesCloudBlockApi.reducerPath]: logotypesCloudBlockApi.reducer,
    [navbarBlockApi.reducerPath]: navbarBlockApi.reducer,
    [notFoundBlockApi.reducerPath]: notFoundBlockApi.reducer,
    [sliderBlockApi.reducerPath]: sliderBlockApi.reducer,
    [footerApi.reducerPath]: footerApi.reducer,
    [layoutApi.reducerPath]: layoutApi.reducer,
    [loaderApi.reducerPath]: loaderApi.reducer,
    [metatagApi.reducerPath]: metatagApi.reducer,
    [modalApi.reducerPath]: modalApi.reducer,
    [navbarApi.reducerPath]: navbarApi.reducer,
    [pageApi.reducerPath]: pageApi.reducer,
    [sidebarApi.reducerPath]: sidebarApi.reducer,
    [slideOverApi.reducerPath]: slideOverApi.reducer,
    [sliderApi.reducerPath]: sliderApi.reducer,
    [themeApi.reducerPath]: themeApi.reducer,
    [topbarApi.reducerPath]: topbarApi.reducer,
    [localeApi.reducerPath]: localeApi.reducer,
    [buttonApi.reducerPath]: buttonApi.reducer,
    [buttonsArrayApi.reducerPath]: buttonsArrayApi.reducer,
    [flyoutApi.reducerPath]: flyoutApi.reducer,
    [checkoutFormBlockApi.reducerPath]: checkoutFormBlockApi.reducer,
    [productsListBlockApi.reducerPath]: productsListBlockApi.reducer,
    [shoppingCartBlockApi.reducerPath]: shoppingCartBlockApi.reducer,
    [contactSectionBlockApi.reducerPath]: contactSectionBlockApi.reducer,
    [reviewsListBlockApi.reducerPath]: reviewsListBlockApi.reducer,
    [reviewsTableBlockApi.reducerPath]: reviewsTableBlockApi.reducer,
  },
  subscriptions: [],
};
