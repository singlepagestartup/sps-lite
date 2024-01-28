import type { IEntity as IFooter } from "../../footer/interfaces";
import type { IEntity as INavbar } from "../../navbar/interfaces";
import type { IEntity as IPage } from "../../page/interfaces";
import type { IEntity as ISidebar } from "../../sidebar/interfaces";
import type { IEntity as ITopbar } from "../../topbar/interfaces";

export interface IEntity {
  id: number;
  locale: string;
  title: string;
  uid: string | null;
  className: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  variant: "wide" | "boxed";
  topbar?: ITopbar | null;
  navbar?: INavbar | null;
  sidebar?: ISidebar | null;
  footer?: IFooter | null;
  pages?: IPage[] | null;
}
