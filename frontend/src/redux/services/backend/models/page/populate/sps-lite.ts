import { reviewPopulate } from "~utils/api/queries";
import {
  buttonArrayPopulate,
  buttonPopulate,
  faqPopulate,
  featurePopulate,
  formPopulate,
  logotypePopulate,
  mediaPopulate,
  sliderPopulate,
  tierPopulate,
} from "~utils/api/queries/sps-lite";

export const populate = {
  page_blocks: {
    populate: {
      buttons: { populate: buttonPopulate },
      additional_buttons: { populate: buttonPopulate },
      extra_buttons: { populate: buttonPopulate },
      extra_buttons_arrays: {
        populate: buttonArrayPopulate,
      },
      background: { populate: mediaPopulate },
      buttons_arrays: {
        populate: buttonArrayPopulate,
      },
      additional_buttons_arrays: {
        populate: buttonArrayPopulate,
      },
      media: { populate: mediaPopulate },
      additional_media: { populate: mediaPopulate },
      tiers: {
        populate: tierPopulate,
      },
      features: { populate: featurePopulate },
      faqs: { populate: faqPopulate },
      logotype: { populate: logotypePopulate },
      logotypes: { populate: logotypePopulate },
      slider: {
        populate: sliderPopulate,
      },
      form: {
        populate: formPopulate,
      },
      reviews: {
        populate: reviewPopulate,
      },
    },
  },
};
