import { populate as tierPopulate } from "../../../../entities/tier/populate";

export const populate = {
  tiers: {
    populate: tierPopulate,
  },
  media: {
    populate: "*",
  },
  additional_media: {
    populate: "*",
  },
};
