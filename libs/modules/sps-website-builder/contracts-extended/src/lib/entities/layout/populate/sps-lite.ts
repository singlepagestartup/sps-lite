import { populate as parentPopulate } from "@sps/sps-website-builder-contracts/lib/entities/layout/populate";
import { populate as topbarPopulate } from "@sps/sps-website-builder-contracts/lib/entities/topbar/populate";
import { populate as navbarPopulate } from "@sps/sps-website-builder-contracts/lib/entities/navbar/populate";
import { populate as sidebarPopulate } from "@sps/sps-website-builder-contracts/lib/entities/sidebar/populate";
import { populate as footerPopulate } from "@sps/sps-website-builder-contracts/lib/entities/footer/populate";
import { populate as pagePopulate } from "@sps/sps-website-builder-contracts/lib/entities/page/populate";

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
