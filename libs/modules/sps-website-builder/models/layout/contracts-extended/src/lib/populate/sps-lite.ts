import { populate as parentPopulate } from "@sps/sps-website-builder-layout-contracts";
import { populate as topbarPopulate } from "@sps/sps-website-builder-topbar-contracts";
import { populate as navbarPopulate } from "@sps/sps-website-builder-navbar-contracts";
import { populate as sidebarPopulate } from "@sps/sps-website-builder-sidebar-contracts";
import { populate as footerPopulate } from "@sps/sps-website-builder-footer-contracts";
import { populate as pagePopulate } from "@sps/sps-website-builder-page-contracts";

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
