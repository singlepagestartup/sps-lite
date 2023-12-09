import { mediaPopulate } from "~utils/api/queries/sps-lite";

export const populate = {
  media: {
    populate: mediaPopulate,
  },
  additional_media: {
    populate: mediaPopulate,
  },
};
