import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/entities/page/populate";
import { populate as layoutPopulate } from "@sps/sps-website-builder-contracts/lib/entities/layout/populate";
import { populate as metatagPopulate } from "@sps/sps-website-builder-contracts/lib/entities/metatag/populate";
import { populate as pageBlockPopulate } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/populate";

export const populate = {
  ...parentPopulate,
  layout: {
    populate: layoutPopulate,
  },
  metatag: {
    populate: metatagPopulate,
  },
  page_blocks: {
    populate: pageBlockPopulate,
  },
};
