import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/models/page/populate";
import { populate as layoutPopulate } from "@sps/sps-website-builder-contracts/lib/models/layout/populate";
import { populate as metatagPopulate } from "@sps/sps-website-builder-contracts/lib/models/metatag/populate";
import { populate as pageBlockPopulate } from "@sps/sps-website-builder-contracts/lib/models/populate";
// Bad practice, should be imported from the file above
// fetching full data for entity should be done in the render entity component
// because importing populate from the contracts-extended will cause circular dependency
// import { populate as pageBlockPopulate } from "../../../components/page-blocks/populate";

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
