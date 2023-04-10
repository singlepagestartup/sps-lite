export const mediaPopulate = `*`;

export const buttonPopulate = {
  media: {
    populate: mediaPopulate,
  },
  additionalMedia: {
    populate: mediaPopulate,
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
  additionalMedia: {
    populate: mediaPopulate,
  },
};

export const featurePopulate = {
  media: {
    populate: mediaPopulate,
  },
  additionalMedia: {
    populate: mediaPopulate,
  },
};

export const tierPopulate = {
  features: {
    populate: featurePopulate,
  },
  currency: {
    populate: `*`,
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
    populate: `*`,
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

export const faqPopulate = `*`;

export const pageBlocksPopulate = {
  page_blocks: {
    populate: {
      buttons: { populate: buttonPopulate },
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
    },
  },
};

export const slideOverPropulate = {
  ...pageBlocksPopulate,
};

export const modalPopulate = {
  ...pageBlocksPopulate,
};

export const reviewsPopulate = {
  media: {
    populate: mediaPopulate,
  },
  additional_media: {
    populate: mediaPopulate,
  },
};

export const currenciesPopulate = {};

export const publicPageAdditonalModels = [];

export const pagePopulate = {
  ...pageBlocksPopulate,
  layout: {
    populate: {
      metatag: {
        favicon: {
          populate: mediaPopulate,
        },
      },
      topbar: {
        populate: {
          ...pageBlocksPopulate,
        },
      },
      navbar: {
        populate: {
          ...pageBlocksPopulate,
        },
      },
      sidebar: {
        populate: {
          ...pageBlocksPopulate,
        },
      },
      footer: {
        populate: {
          ...pageBlocksPopulate,
        },
      },
    },
  },
};
