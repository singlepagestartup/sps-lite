import { populate as contactSectionBlockPopulate } from "../contact-section-block/populate";
import { populate as reviewsListBlockPopulate } from "../reviews-list-block/populate";
import { populate as reviewsTableBlockPopulate } from "../reviews-table-block/populate";

export const populate = {
  ...contactSectionBlockPopulate,
  ...reviewsListBlockPopulate,
  ...reviewsTableBlockPopulate,
};
