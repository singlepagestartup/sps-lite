import { api as alertBlockApi } from "../alert-block/api";
import { api as ctaSectionBlockApi } from "../cta-section-block/api";
import { api as faqBlockApi } from "../faq-block/api";
import { api as featuresSectionBlockApi } from "../features-section-block/api";
import { api as footerBlockApi } from "../footer-block/api";
import { api as headerSectionBlockApi } from "../header-section-block/api";
import { api as heroSectionBlockApi } from "../hero-section-block/api";
import { api as incentivesBlockApi } from "../incentives-block/api";
import { api as logotypesCloudBlockApi } from "../logotypes-cloud-block/api";
import { api as navbarBlockApi } from "../navbar-block/api";
import { api as notFoundBlockApi } from "../not-found-block/api";
import { api as sliderBlockApi } from "../slider-block/api";

export const slices = {
  middlewares: [
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
  ],
  reducer: {
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
  },
};
