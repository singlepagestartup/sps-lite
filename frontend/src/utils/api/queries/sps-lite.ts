import { populate as currencyPopulate } from "~redux/services/backend/models/currency/populate";
import { populate as reviewPopulate } from "~redux/services/backend/models/review/populate";

export const mediaPopulate = {
  formats: {
    populate: "*",
  },
};

export const buttonPopulate = {
  media: {
    populate: mediaPopulate,
  },
  additional_media: {
    populate: mediaPopulate,
  },
  flyout: {
    populate: "*",
  },
};

export const buttonArrayPopulate = {
  buttons: {
    populate: buttonPopulate,
  },
};

export const logotypePopulate = {
  media: {
    populate: mediaPopulate,
  },
  additional_media: {
    populate: mediaPopulate,
  },
};

export const featurePopulate = {
  media: {
    populate: mediaPopulate,
  },
  additional_media: {
    populate: mediaPopulate,
  },
};

export const tierPopulate = {
  features: {
    populate: featurePopulate,
  },
  currency: {
    populate: currencyPopulate,
  },
};

export const slidePopulate = {
  media: {
    populate: mediaPopulate,
  },
  buttons: {
    populate: buttonPopulate,
  },
};

export const sliderPopulate = {
  slides: {
    populate: slidePopulate,
  },
};

export const inputPopulate = {
  options: {
    populate: "*",
    media: {
      populate: mediaPopulate,
    },
    additional_media: {
      populate: mediaPopulate,
    },
  },
  media: {
    populate: mediaPopulate,
  },
  additional_media: {
    populate: mediaPopulate,
  },
  extra_media: {
    populate: mediaPopulate,
  },
};

export const formPopulate = {
  inputs: {
    populate: inputPopulate,
  },
  button: {
    populate: buttonPopulate,
  },
};

export const faqPopulate = "*";

export const metatagPopulate = {
  favicon: {
    populate: mediaPopulate,
  },
};

export const pageBlockPopulate = {
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

export const slideOverPropulate = {
  ...pageBlockPopulate,
};

export const pagePopulate = {
  ...pageBlockPopulate,
};
