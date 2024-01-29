import type { IEntity as IParentEntity } from "@sps/sps-website-builder-contracts/lib/entities/layout/interfaces";
import type { IEntity as IFooter } from "@sps/sps-website-builder-contracts/lib/entities/footer/interfaces";
import type { IEntity as INavbar } from "@sps/sps-website-builder-contracts/lib/entities/navbar/interfaces";
import type { IEntity as IPage } from "@sps/sps-website-builder-contracts/lib/entities/page/interfaces";
import type { IEntity as ISidebar } from "@sps/sps-website-builder-contracts/lib/entities/sidebar/interfaces";
import type { IEntity as ITopbar } from "@sps/sps-website-builder-contracts/lib/entities/topbar/interfaces";

export interface IEntity extends IParentEntity {
  topbar?: ITopbar | null;
  navbar?: INavbar | null;
  sidebar?: ISidebar | null;
  footer?: IFooter | null;
  pages?: IPage[] | null;
}
