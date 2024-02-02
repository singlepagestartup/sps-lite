import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/models/layout/populate";
import { populate as topbarPopulate } from "@sps/sps-website-builder-contracts/lib/models/topbar/populate";
import { populate as navbarPopulate } from "@sps/sps-website-builder-contracts/lib/models/navbar/populate";
import { populate as sidebarPopulate } from "@sps/sps-website-builder-contracts/lib/models/sidebar/populate";
import { populate as footerPopulate } from "@sps/sps-website-builder-contracts/lib/models/footer/populate";
import { populate as pagePopulate } from "@sps/sps-website-builder-contracts/lib/models/page/populate";

export const populate = {
  ...parentPopulate,
  topbar: {
    populate: topbarPopulate,
  },
  navbar: {
    populate: navbarPopulate,
  },
  sidebar: {
    populate: sidebarPopulate,
  },
  footer: {
    populate: footerPopulate,
  },
  pages: {
    populate: pagePopulate,
  },
};
