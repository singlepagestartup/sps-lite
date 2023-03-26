const buttonPopulate = {
  icon: `*`,
};

const buttonArrayPopulate = {
  buttons: {
    populate: buttonPopulate,
  },
};

export const footerPopulate = {
  logo: `*`,
  social_networks_buttons: {
    populate: buttonArrayPopulate,
  },
  policies_buttons: {
    populate: buttonArrayPopulate,
  },
  buttons_arrays: {
    populate: buttonArrayPopulate,
  },
};

export const headerPopulate = {
  logo: `*`,
  position: `*`,
  buttons: {
    populate: {
      buttons: {
        populate: buttonPopulate,
      },
      icon: `*`,
      buttons_arrays: {
        populate: buttonArrayPopulate,
      },
    },
  },
  additional_buttons: {
    populate: buttonPopulate,
  },
  cta_buttons: {
    populate: buttonPopulate,
  },
  profile_buttons: {
    populate: buttonPopulate,
  },
  topbar: {
    populate: {
      title: `*`,
      buttons: {
        populate: buttonPopulate,
      },
    },
  },
};

export const pageBlocksQuery = {
  populate: {
    page_blocks: {
      populate: {
        buttons: { populate: `*` },
        background: { populate: `*` },
        buttons_arrays: {
          populate: buttonArrayPopulate,
        },
        media: { populate: `*` },
        tiers: {
          populate: {
            features: {
              populate: `*`,
            },
          },
        },
        features: { populate: `*` },
        faqs: { populate: `*` },
        logos: { populate: `*` },
        logo: { populate: `*` },
        slider: {
          populate: {
            slides: { populate: `*` },
          },
        },
        form: {
          populate: {
            inputs: {
              populate: {
                options: {
                  populate: `*`,
                },
              },
            },
            button: {
              populate: {
                icon: `*`,
              },
            },
          },
        },
      },
    },
    // Needs for product page, because strapi gives only 2 deep leves of components
    tabs: { populate: `*` },
  },
};
