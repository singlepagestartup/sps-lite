import { IBackendApiEntity as IBackendApiFooter } from "../../footer/interfaces";
import { IBackendApiEntity as IBackendApiNavbar } from "../../navbar/interfaces";
import { IBackendApiEntity as IBackendApiPage } from "../../page/interfaces";
import { IBackendApiEntity as IBackendApiSidebar } from "../../sidebar/interfaces";
import { IBackendApiEntity as IBackendApiTopbar } from "../../topbar/interfaces";

export interface IBackendApiEntity {
  id: number;
  locale: string;
  title: string;
  uid: string | null;
  className: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  variant: "wide" | "boxed";
  topbar?: IBackendApiTopbar | null;
  navbar?: IBackendApiNavbar | null;
  sidebar?: IBackendApiSidebar | null;
  footer?: IBackendApiFooter | null;
  pages?: IBackendApiPage[] | null;
}
