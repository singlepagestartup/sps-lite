import { populate as contactSectionBlockPopulate } from "../contact-section-block/populate";
import { populate as reviewsListBlockPopulate } from "../reviews-list-block/populate";

export const populate = {
  ...contactSectionBlockPopulate,
  ...reviewsListBlockPopulate,
};
