import type { IModel as IParentModel } from "@sps/sps-website-builder-layout-contracts";
import type { IModel as IFooter } from "@sps/sps-website-builder-footer-contracts";
import type { IModel as INavbar } from "@sps/sps-website-builder-navbar-contracts";
import type { IModel as IPage } from "@sps/sps-website-builder-page-contracts";
import type { IModel as ISidebar } from "@sps/sps-website-builder-sidebar-contracts";
import type { IModel as ITopbar } from "@sps/sps-website-builder-topbar-contracts";

export interface IModel extends IParentModel {
  topbar?: ITopbar | null;
  navbar?: INavbar | null;
  sidebar?: ISidebar | null;
  footer?: IFooter | null;
  pages?: IPage[] | null;
}
