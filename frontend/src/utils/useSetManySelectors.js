import * as R from "ramda";

const product = {
  id: 1,
  title: `T-Shirt`,
  uid: `t-shirt`,
  price: 35,
  description: `Awesome T-Shirt`,
  createdAt: `2022-12-12T13:57:05.986Z`,
  updatedAt: `2022-12-15T10:08:11.789Z`,
  publishedAt: `2022-12-12T13:57:07.515Z`,
  locale: `en`,
  fullDescription: `Awesome T-Shirt full description`,
  score: null,
  media: [
    {
      id: 6,
      name: `Снимок экрана 2022-12-12 в 21.02.33.png`,
      alternativeText: null,
      caption: null,
      width: 542,
      height: 626,
      formats: {
        small: {
          ext: `.png`,
          url: `https://721511.selcdn.ru/sps-rogwild/small_Snimok_ekrana_2022_12_12_v_21_02_33_36c254ac4e.png`,
          hash: `small_Snimok_ekrana_2022_12_12_v_21_02_33_36c254ac4e`,
          mime: `image/png`,
          name: `small_Снимок экрана 2022-12-12 в 21.02.33.png`,
          path: null,
          size: 232.07,
          width: 433,
          height: 500,
        },
        thumbnail: {
          ext: `.png`,
          url: `https://721511.selcdn.ru/sps-rogwild/thumbnail_Snimok_ekrana_2022_12_12_v_21_02_33_36c254ac4e.png`,
          hash: `thumbnail_Snimok_ekrana_2022_12_12_v_21_02_33_36c254ac4e`,
          mime: `image/png`,
          name: `thumbnail_Снимок экрана 2022-12-12 в 21.02.33.png`,
          path: null,
          size: 21.33,
          width: 135,
          height: 156,
        },
      },
      hash: `Snimok_ekrana_2022_12_12_v_21_02_33_36c254ac4e`,
      ext: `.png`,
      mime: `image/png`,
      size: 282.94,
      url: `https://721511.selcdn.ru/sps-rogwild/Snimok_ekrana_2022_12_12_v_21_02_33_36c254ac4e.png`,
      previewUrl: null,
      provider: `aws-s3`,
      providerMetadata: null,
      createdAt: `2022-12-12T15:32:55.222Z`,
      updatedAt: `2022-12-12T15:32:55.222Z`,
    },
  ],
  attributes: [
    {
      id: 6,
      string: `100% Cotton`,
      number: null,
      boolean: null,
      createdAt: `2022-12-12T14:24:27.169Z`,
      updatedAt: `2022-12-12T14:24:27.169Z`,
    },
  ],
  category: {
    id: 1,
    title: `Shirts`,
    uid: `shirts`,
    createdAt: `2022-12-12T15:34:13.305Z`,
    updatedAt: `2022-12-12T15:41:34.806Z`,
    publishedAt: `2022-12-12T15:41:34.775Z`,
    locale: `en`,
    description: `The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock.`,
    fullDescription: `The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock. Make your desk beautiful and organized. Post a picture to social media and watch it get more likes than life-changing announcements. Reflect on the shallow nature of existence. \nAt least you have a really nice desk setup.`,
  },
  variants: [
    {
      id: 3,
      price: 35,
      media: [
        {
          id: 6,
          name: `Снимок экрана 2022-12-12 в 21.02.33.png`,
          alternativeText: null,
          caption: null,
          width: 542,
          height: 626,
          formats: {
            small: {
              ext: `.png`,
              url: `https://721511.selcdn.ru/sps-rogwild/small_Snimok_ekrana_2022_12_12_v_21_02_33_36c254ac4e.png`,
              hash: `small_Snimok_ekrana_2022_12_12_v_21_02_33_36c254ac4e`,
              mime: `image/png`,
              name: `small_Снимок экрана 2022-12-12 в 21.02.33.png`,
              path: null,
              size: 232.07,
              width: 433,
              height: 500,
            },
            thumbnail: {
              ext: `.png`,
              url: `https://721511.selcdn.ru/sps-rogwild/thumbnail_Snimok_ekrana_2022_12_12_v_21_02_33_36c254ac4e.png`,
              hash: `thumbnail_Snimok_ekrana_2022_12_12_v_21_02_33_36c254ac4e`,
              mime: `image/png`,
              name: `thumbnail_Снимок экрана 2022-12-12 в 21.02.33.png`,
              path: null,
              size: 21.33,
              width: 135,
              height: 156,
            },
          },
          hash: `Snimok_ekrana_2022_12_12_v_21_02_33_36c254ac4e`,
          ext: `.png`,
          mime: `image/png`,
          size: 282.94,
          url: `https://721511.selcdn.ru/sps-rogwild/Snimok_ekrana_2022_12_12_v_21_02_33_36c254ac4e.png`,
          previewUrl: null,
          provider: `aws-s3`,
          providerMetadata: null,
          createdAt: `2022-12-12T15:32:55.222Z`,
          updatedAt: `2022-12-12T15:32:55.222Z`,
        },
      ],
      attributes: [
        {
          id: 1,
          string: `XS`,
          number: null,
          boolean: null,
          createdAt: `2022-12-12T13:54:27.798Z`,
          updatedAt: `2022-12-12T13:54:27.798Z`,
          key: {
            id: 1,
            title: `size`,
            key: `size`,
            createdAt: `2022-12-12T13:54:14.371Z`,
            updatedAt: `2022-12-12T13:54:14.371Z`,
            locale: `en`,
          },
        },
        {
          id: 7,
          string: `black`,
          number: null,
          boolean: null,
          createdAt: `2022-12-13T07:49:11.265Z`,
          updatedAt: `2022-12-13T07:49:11.265Z`,
          key: {
            id: 4,
            title: `color`,
            key: `color`,
            createdAt: `2022-12-13T07:49:02.647Z`,
            updatedAt: `2022-12-13T07:49:02.647Z`,
            locale: `en`,
          },
        },
        {
          id: 5,
          string: null,
          number: null,
          boolean: false,
          createdAt: `2022-12-12T13:55:26.003Z`,
          updatedAt: `2022-12-12T13:55:26.003Z`,
          key: {
            id: 2,
            title: `oversize`,
            key: `oversize`,
            createdAt: `2022-12-12T13:55:09.332Z`,
            updatedAt: `2022-12-12T13:55:09.332Z`,
            locale: `en`,
          },
        },
      ],
    },
    {
      id: 2,
      price: 35,
      media: [
        {
          id: 7,
          name: `Снимок экрана 2022-12-12 в 21.02.40.png`,
          alternativeText: null,
          caption: null,
          width: 550,
          height: 636,
          formats: {
            small: {
              ext: `.png`,
              url: `https://721511.selcdn.ru/sps-rogwild/small_Snimok_ekrana_2022_12_12_v_21_02_40_5859b89da6.png`,
              hash: `small_Snimok_ekrana_2022_12_12_v_21_02_40_5859b89da6`,
              mime: `image/png`,
              name: `small_Снимок экрана 2022-12-12 в 21.02.40.png`,
              path: null,
              size: 264.02,
              width: 432,
              height: 500,
            },
            thumbnail: {
              ext: `.png`,
              url: `https://721511.selcdn.ru/sps-rogwild/thumbnail_Snimok_ekrana_2022_12_12_v_21_02_40_5859b89da6.png`,
              hash: `thumbnail_Snimok_ekrana_2022_12_12_v_21_02_40_5859b89da6`,
              mime: `image/png`,
              name: `thumbnail_Снимок экрана 2022-12-12 в 21.02.40.png`,
              path: null,
              size: 24.86,
              width: 135,
              height: 156,
            },
          },
          hash: `Snimok_ekrana_2022_12_12_v_21_02_40_5859b89da6`,
          ext: `.png`,
          mime: `image/png`,
          size: 353.33,
          url: `https://721511.selcdn.ru/sps-rogwild/Snimok_ekrana_2022_12_12_v_21_02_40_5859b89da6.png`,
          previewUrl: null,
          provider: `aws-s3`,
          providerMetadata: null,
          createdAt: `2022-12-12T15:32:55.258Z`,
          updatedAt: `2022-12-12T15:32:55.258Z`,
        },
      ],
      attributes: [
        {
          id: 1,
          string: `XS`,
          number: null,
          boolean: null,
          createdAt: `2022-12-12T13:54:27.798Z`,
          updatedAt: `2022-12-12T13:54:27.798Z`,
          key: {
            id: 1,
            title: `size`,
            key: `size`,
            createdAt: `2022-12-12T13:54:14.371Z`,
            updatedAt: `2022-12-12T13:54:14.371Z`,
            locale: `en`,
          },
        },
        {
          id: 8,
          string: `gray`,
          number: null,
          boolean: null,
          createdAt: `2022-12-13T07:49:21.037Z`,
          updatedAt: `2022-12-13T08:11:13.959Z`,
          key: {
            id: 4,
            title: `color`,
            key: `color`,
            createdAt: `2022-12-13T07:49:02.647Z`,
            updatedAt: `2022-12-13T07:49:02.647Z`,
            locale: `en`,
          },
        },
        {
          id: 5,
          string: null,
          number: null,
          boolean: false,
          createdAt: `2022-12-12T13:55:26.003Z`,
          updatedAt: `2022-12-12T13:55:26.003Z`,
          key: {
            id: 2,
            title: `oversize`,
            key: `oversize`,
            createdAt: `2022-12-12T13:55:09.332Z`,
            updatedAt: `2022-12-12T13:55:09.332Z`,
            locale: `en`,
          },
        },
      ],
    },
    {
      id: 4,
      price: 35,
      media: [
        {
          id: 6,
          name: `Снимок экрана 2022-12-12 в 21.02.33.png`,
          alternativeText: null,
          caption: null,
          width: 542,
          height: 626,
          formats: {
            small: {
              ext: `.png`,
              url: `https://721511.selcdn.ru/sps-rogwild/small_Snimok_ekrana_2022_12_12_v_21_02_33_36c254ac4e.png`,
              hash: `small_Snimok_ekrana_2022_12_12_v_21_02_33_36c254ac4e`,
              mime: `image/png`,
              name: `small_Снимок экрана 2022-12-12 в 21.02.33.png`,
              path: null,
              size: 232.07,
              width: 433,
              height: 500,
            },
            thumbnail: {
              ext: `.png`,
              url: `https://721511.selcdn.ru/sps-rogwild/thumbnail_Snimok_ekrana_2022_12_12_v_21_02_33_36c254ac4e.png`,
              hash: `thumbnail_Snimok_ekrana_2022_12_12_v_21_02_33_36c254ac4e`,
              mime: `image/png`,
              name: `thumbnail_Снимок экрана 2022-12-12 в 21.02.33.png`,
              path: null,
              size: 21.33,
              width: 135,
              height: 156,
            },
          },
          hash: `Snimok_ekrana_2022_12_12_v_21_02_33_36c254ac4e`,
          ext: `.png`,
          mime: `image/png`,
          size: 282.94,
          url: `https://721511.selcdn.ru/sps-rogwild/Snimok_ekrana_2022_12_12_v_21_02_33_36c254ac4e.png`,
          previewUrl: null,
          provider: `aws-s3`,
          providerMetadata: null,
          createdAt: `2022-12-12T15:32:55.222Z`,
          updatedAt: `2022-12-12T15:32:55.222Z`,
        },
      ],
      attributes: [
        {
          id: 3,
          string: `M`,
          number: null,
          boolean: null,
          createdAt: `2022-12-12T13:54:48.296Z`,
          updatedAt: `2022-12-12T13:54:48.296Z`,
          key: {
            id: 1,
            title: `size`,
            key: `size`,
            createdAt: `2022-12-12T13:54:14.371Z`,
            updatedAt: `2022-12-12T13:54:14.371Z`,
            locale: `en`,
          },
        },
        {
          id: 7,
          string: `black`,
          number: null,
          boolean: null,
          createdAt: `2022-12-13T07:49:11.265Z`,
          updatedAt: `2022-12-13T07:49:11.265Z`,
          key: {
            id: 4,
            title: `color`,
            key: `color`,
            createdAt: `2022-12-13T07:49:02.647Z`,
            updatedAt: `2022-12-13T07:49:02.647Z`,
            locale: `en`,
          },
        },
        {
          id: 4,
          string: null,
          number: null,
          boolean: true,
          createdAt: `2022-12-12T13:55:18.561Z`,
          updatedAt: `2022-12-12T13:55:18.561Z`,
          key: {
            id: 2,
            title: `oversize`,
            key: `oversize`,
            createdAt: `2022-12-12T13:55:09.332Z`,
            updatedAt: `2022-12-12T13:55:09.332Z`,
            locale: `en`,
          },
        },
      ],
    },
    {
      id: 5,
      price: 35,
      media: [
        {
          id: 7,
          name: `Снимок экрана 2022-12-12 в 21.02.40.png`,
          alternativeText: null,
          caption: null,
          width: 550,
          height: 636,
          formats: {
            small: {
              ext: `.png`,
              url: `https://721511.selcdn.ru/sps-rogwild/small_Snimok_ekrana_2022_12_12_v_21_02_40_5859b89da6.png`,
              hash: `small_Snimok_ekrana_2022_12_12_v_21_02_40_5859b89da6`,
              mime: `image/png`,
              name: `small_Снимок экрана 2022-12-12 в 21.02.40.png`,
              path: null,
              size: 264.02,
              width: 432,
              height: 500,
            },
            thumbnail: {
              ext: `.png`,
              url: `https://721511.selcdn.ru/sps-rogwild/thumbnail_Snimok_ekrana_2022_12_12_v_21_02_40_5859b89da6.png`,
              hash: `thumbnail_Snimok_ekrana_2022_12_12_v_21_02_40_5859b89da6`,
              mime: `image/png`,
              name: `thumbnail_Снимок экрана 2022-12-12 в 21.02.40.png`,
              path: null,
              size: 24.86,
              width: 135,
              height: 156,
            },
          },
          hash: `Snimok_ekrana_2022_12_12_v_21_02_40_5859b89da6`,
          ext: `.png`,
          mime: `image/png`,
          size: 353.33,
          url: `https://721511.selcdn.ru/sps-rogwild/Snimok_ekrana_2022_12_12_v_21_02_40_5859b89da6.png`,
          previewUrl: null,
          provider: `aws-s3`,
          providerMetadata: null,
          createdAt: `2022-12-12T15:32:55.258Z`,
          updatedAt: `2022-12-12T15:32:55.258Z`,
        },
      ],
      attributes: [
        {
          id: 2,
          string: `S`,
          number: null,
          boolean: null,
          createdAt: `2022-12-12T13:54:36.245Z`,
          updatedAt: `2022-12-12T13:54:36.245Z`,
          key: {
            id: 1,
            title: `size`,
            key: `size`,
            createdAt: `2022-12-12T13:54:14.371Z`,
            updatedAt: `2022-12-12T13:54:14.371Z`,
            locale: `en`,
          },
        },
        {
          id: 8,
          string: `gray`,
          number: null,
          boolean: null,
          createdAt: `2022-12-13T07:49:21.037Z`,
          updatedAt: `2022-12-13T08:11:13.959Z`,
          key: {
            id: 4,
            title: `color`,
            key: `color`,
            createdAt: `2022-12-13T07:49:02.647Z`,
            updatedAt: `2022-12-13T07:49:02.647Z`,
            locale: `en`,
          },
        },
        {
          id: 5,
          string: null,
          number: null,
          boolean: false,
          createdAt: `2022-12-12T13:55:26.003Z`,
          updatedAt: `2022-12-12T13:55:26.003Z`,
          key: {
            id: 2,
            title: `oversize`,
            key: `oversize`,
            createdAt: `2022-12-12T13:55:09.332Z`,
            updatedAt: `2022-12-12T13:55:09.332Z`,
            locale: `en`,
          },
        },
      ],
    },
    {
      id: 6,
      price: 35,
      media: [
        {
          id: 8,
          name: `Снимок экрана 2022-12-13 в 15.50.52.png`,
          alternativeText: null,
          caption: null,
          width: 514,
          height: 582,
          formats: {
            small: {
              ext: `.png`,
              url: `https://721511.selcdn.ru/sps-rogwild/small_Snimok_ekrana_2022_12_13_v_15_50_52_5bde2f586c.png`,
              hash: `small_Snimok_ekrana_2022_12_13_v_15_50_52_5bde2f586c`,
              mime: `image/png`,
              name: `small_Снимок экрана 2022-12-13 в 15.50.52.png`,
              path: null,
              size: 284.22,
              width: 442,
              height: 500,
            },
            thumbnail: {
              ext: `.png`,
              url: `https://721511.selcdn.ru/sps-rogwild/thumbnail_Snimok_ekrana_2022_12_13_v_15_50_52_5bde2f586c.png`,
              hash: `thumbnail_Snimok_ekrana_2022_12_13_v_15_50_52_5bde2f586c`,
              mime: `image/png`,
              name: `thumbnail_Снимок экрана 2022-12-13 в 15.50.52.png`,
              path: null,
              size: 29.17,
              width: 138,
              height: 156,
            },
          },
          hash: `Snimok_ekrana_2022_12_13_v_15_50_52_5bde2f586c`,
          ext: `.png`,
          mime: `image/png`,
          size: 339.78,
          url: `https://721511.selcdn.ru/sps-rogwild/Snimok_ekrana_2022_12_13_v_15_50_52_5bde2f586c.png`,
          previewUrl: null,
          provider: `aws-s3`,
          providerMetadata: null,
          createdAt: `2022-12-13T10:21:12.377Z`,
          updatedAt: `2022-12-13T10:21:12.377Z`,
        },
      ],
      attributes: [
        {
          id: 9,
          string: `red`,
          number: null,
          boolean: null,
          createdAt: `2022-12-13T10:20:19.267Z`,
          updatedAt: `2022-12-13T10:20:19.267Z`,
          key: {
            id: 4,
            title: `color`,
            key: `color`,
            createdAt: `2022-12-13T07:49:02.647Z`,
            updatedAt: `2022-12-13T07:49:02.647Z`,
            locale: `en`,
          },
        },
        {
          id: 3,
          string: `M`,
          number: null,
          boolean: null,
          createdAt: `2022-12-12T13:54:48.296Z`,
          updatedAt: `2022-12-12T13:54:48.296Z`,
          key: {
            id: 1,
            title: `size`,
            key: `size`,
            createdAt: `2022-12-12T13:54:14.371Z`,
            updatedAt: `2022-12-12T13:54:14.371Z`,
            locale: `en`,
          },
        },
        {
          id: 4,
          string: null,
          number: null,
          boolean: true,
          createdAt: `2022-12-12T13:55:18.561Z`,
          updatedAt: `2022-12-12T13:55:18.561Z`,
          key: {
            id: 2,
            title: `oversize`,
            key: `oversize`,
            createdAt: `2022-12-12T13:55:09.332Z`,
            updatedAt: `2022-12-12T13:55:09.332Z`,
            locale: `en`,
          },
        },
      ],
    },
  ],
};

const filters = {
  quantity: ``,
  color: {
    id: 9,
    string: `red`,
    number: null,
    boolean: null,
    createdAt: `2022-12-13T10:20:19.267Z`,
    updatedAt: `2022-12-13T10:20:19.267Z`,
    key: {
      id: 4,
      title: `color`,
      key: `color`,
      createdAt: `2022-12-13T07:49:02.647Z`,
      updatedAt: `2022-12-13T07:49:02.647Z`,
      locale: `en`,
    },
  },
  size: {
    id: 3,
    string: `M`,
    number: null,
    boolean: null,
    createdAt: `2022-12-12T13:54:48.296Z`,
    updatedAt: `2022-12-12T13:54:48.296Z`,
    key: {
      id: 1,
      title: `size`,
      key: `size`,
      createdAt: `2022-12-12T13:54:14.371Z`,
      updatedAt: `2022-12-12T13:54:14.371Z`,
      locale: `en`,
    },
  },
  oversize: {
    id: 4,
    string: null,
    number: null,
    boolean: true,
    createdAt: `2022-12-12T13:55:18.561Z`,
    updatedAt: `2022-12-12T13:55:18.561Z`,
    key: {
      id: 2,
      title: `oversize`,
      key: `oversize`,
      createdAt: `2022-12-12T13:55:09.332Z`,
      updatedAt: `2022-12-12T13:55:09.332Z`,
      locale: `en`,
    },
  },
};

function getAttributes(variants) {
  const attributes = variants.reduce((prev, variant) => {
    const variantAttributesKeys = variant.attributes.reduce(
      (prevAttributes, attribute) => {
        return [...prevAttributes, attribute.key];
      },
      []
    );

    return [...prev, ...variantAttributesKeys];
  }, []);

  return R.uniq(attributes);
}

function checkVariantFitsFilters({ filters, variant }) {
  const fits = Object.keys(filters)
    .map((filterKey) => {
      const filter = filters[filterKey];

      if (typeof filter !== `object`) {
        return true;
      }

      const variantAttribute = variant.attributes.find(
        (attr) => attr.key.id === filter.key.id
      );

      const eqString = () =>
        variantAttribute?.string !== null &&
        variantAttribute?.string === filter.string;

      const eqNumber = () =>
        variantAttribute?.number !== null &&
        variantAttribute?.number === filter.number;

      const eqBoolean = () =>
        variantAttribute?.boolean !== null &&
        variantAttribute?.boolean === filter.boolean;

      if (eqString() || eqNumber() || eqBoolean()) {
        return true;
      }

      return false;
    })
    .every((fits) => fits === true);

  return fits;
}

function getFittedVariants({ product, filters }) {
  const filteredVariants = product.variants.filter((variant) => {
    if (checkVariantFitsFilters({ filters, variant })) {
      return variant;
    }
  });

  return filteredVariants;
}

function getFittedVariant({ product, filters }) {
  return {
    variant: getFittedVariants({ product, filters })[0],
  };
}

function getExpendedAttributes({ filters, changedFilterKeys, product }) {
  changedFilterKeys;
  filters;

  const variants = product.variants.map((variant) => {
    return variant;
  });

  const attributes = getAttributes(variants);

  const uniqueAttributes = attributes
    .map((attributeKey) => {
      const attributes = product.variants.map((variant) => {
        const variantAttributes = variant.attributes.filter(
          (variantAttribute) => {
            if (variantAttribute.key.id === attributeKey.id) {
              return true;
            }
          }
        );

        return variantAttributes;
      });

      return { ...attributeKey, attributes: R.uniq(attributes.flat(1)) };
    })
    .flat(1);

  for (const [index, attribute] of uniqueAttributes.entries()) {
    const updatedFilter = {};
    const reversedChangedFilterKeys = R.take(
      attributes.length - 1,
      R.reverse(changedFilterKeys)
    );

    for (const key in filters) {
      if (R.includes(key, reversedChangedFilterKeys)) {
        updatedFilter[key] = filters[key];
      }
    }

    updatedFilter;
    attribute;
    const variants = getFittedVariants({ product, filters: updatedFilter });

    variants.length;
    if (R.not(R.includes(attribute.key, reversedChangedFilterKeys))) {
      // const thatAttributeInVariant = variants.reduce(() => {}, );
      const variantAttributes = variants
        .map((variant) => {
          return variant.attributes.filter((attr) => {
            if (attr.key.key === attribute.key) {
              return attr;
            }
          });
        })
        .flat(1);

      const attributes = attribute.attributes.map((attr) => {
        const isAvailable =
          variantAttributes.find((at) => at.id === attr.id) !== undefined;

        return { ...attr, isAvailable };
      });

      uniqueAttributes[index] = {
        ...attribute,
        attributes,
      };
    } else {
    }
  }

  return uniqueAttributes;
}

const changedFilterKeys = [
  `color`,
  `size`,
  `oversize`,
  `oversize`,
  `color`,
  `size`,
];

const variant = getFittedVariant({ product, filters });

const expandedAttrs = getExpendedAttributes({
  filters,
  changedFilterKeys,
  product,
});

expandedAttrs;

function getFilteredAttributes() {}
