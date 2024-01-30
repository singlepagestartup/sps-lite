import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/entities/navbar/populate";
// import { populate as pageBlockPopulate } from "@sps/sps-website-builder-contracts/lib/components/page-blocks/populate";
// Bad practice, should be imported from the file above
// fetching full data for entity should be done in the render entity component
// because importing populate from the contracts-extended will cause circular dependency
import { populate as pageBlockPopulate } from "../../../components/page-blocks/populate";

export const populate = {
  ...parentPopulate,
  page_blocks: {
    populate: pageBlockPopulate,
  },
};
