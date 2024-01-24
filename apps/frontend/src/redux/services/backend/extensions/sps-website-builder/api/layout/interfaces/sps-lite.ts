import { IEntity as IBackendFooter } from "../../footer/interfaces";
import { IEntity as IBackendNavbar } from "../../navbar/interfaces";
import { IEntity as IBackendPage } from "../../page/interfaces";
import { IEntity as IBackendSidebar } from "../../sidebar/interfaces";
import { IEntity as IBackendTopbar } from "../../topbar/interfaces";

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
  topbar?: IBackendTopbar | null;
  navbar?: IBackendNavbar | null;
  sidebar?: IBackendSidebar | null;
  footer?: IBackendFooter | null;
  pages?: IBackendPage[] | null;
}
