import {
  pageBlockPopulate as spsLitePageBlockPopulate,
  slideOverPropulate as spsLiteSlideOverPropulate,
  modalPopulate as spsLiteModalPopulate,
  reviewPopulate as spsLiteReviewPopulate,
  currencyPopulate as spsLiteCurrencyPopulate,
  pagePopulate as spsLitePagePopulate,
  layoutPopulate as spsLiteLayoutPopulate,
  metatagPopulate as spsLiteMetatagPopulate,
  loaderPopulate as spsLiteLoaderPopulate,
} from "./sps-lite";

export const pageBlockPopulate = {
  ...spsLitePageBlockPopulate,
};

export const slideOverPropulate = {
  ...spsLiteSlideOverPropulate,
};

export const modalPopulate = {
  ...spsLiteModalPopulate,
};

export const reviewPopulate = {
  ...spsLiteReviewPopulate,
};

export const currencyPopulate = spsLiteCurrencyPopulate;

export const pagePopulate = {
  ...pageBlockPopulate,
};

export const metatagPopulate = {
  ...spsLitePagePopulate,
  ...spsLiteMetatagPopulate,
};

export const layoutPopulate = { ...spsLiteLayoutPopulate };

export const loaderPopulate = {
  ...spsLiteLoaderPopulate,
};
