import type { IModel as IParentModel } from "@sps/sps-website-builder-contracts/lib/models/layout/interfaces";
import type { IModel as IFooter } from "@sps/sps-website-builder-contracts/lib/models/footer/interfaces";
import type { IModel as INavbar } from "@sps/sps-website-builder-contracts/lib/models/navbar/interfaces";
import type { IModel as IPage } from "@sps/sps-website-builder-contracts/lib/models/page/interfaces";
import type { IModel as ISidebar } from "@sps/sps-website-builder-contracts/lib/models/sidebar/interfaces";
import type { IModel as ITopbar } from "@sps/sps-website-builder-contracts/lib/models/topbar/interfaces";

export interface IModel extends IParentModel {
  topbar?: ITopbar | null;
  navbar?: INavbar | null;
  sidebar?: ISidebar | null;
  footer?: IFooter | null;
  pages?: IPage[] | null;
}
