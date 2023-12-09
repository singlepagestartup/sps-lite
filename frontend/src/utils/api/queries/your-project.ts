import {
  pageBlockPopulate as spsLitePageBlockPopulate,
  slideOverPropulate as spsLiteSlideOverPropulate,
  reviewPopulate as spsLiteReviewPopulate,
  pagePopulate as spsLitePagePopulate,
  metatagPopulate as spsLiteMetatagPopulate,
} from "./sps-lite";

export const pageBlockPopulate = {
  ...spsLitePageBlockPopulate,
};

export const slideOverPropulate = {
  ...spsLiteSlideOverPropulate,
};

export const reviewPopulate = {
  ...spsLiteReviewPopulate,
};

export const pagePopulate = {
  ...pageBlockPopulate,
};

export const metatagPopulate = {
  ...spsLitePagePopulate,
  ...spsLiteMetatagPopulate,
};
