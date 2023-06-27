export const mediaPopulate = "*";

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
    populate: "*",
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

export const reviewPopulate = {
  media: {
    populate: mediaPopulate,
  },
  additional_media: {
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

export const modalPopulate = {
  ...pageBlockPopulate,
};

export const currencyPopulate = {};

export const pagePopulate = {
  ...pageBlockPopulate,
};

export const layoutPopulate = {
  navbar: {
    populate: {
      page_blocks: "*",
    },
  },
  topbar: {
    populate: {
      page_blocks: "*",
    },
  },
  footer: {
    populate: {
      page_blocks: "*",
    },
  },
  sidebar: {
    populate: {
      page_blocks: "*",
    },
  },
  slide_overs: {
    populate: {
      page_blocks: "*",
    },
  },
  modals: {
    populate: {
      page_blocks: "*",
    },
  },
  pages: {
    populate: {
      page_blocks: "*",
    },
  },
};

export const loaderPopulate = {
  media: {
    populate: mediaPopulate,
  },
  additional_media: {
    populate: mediaPopulate,
  },
};
