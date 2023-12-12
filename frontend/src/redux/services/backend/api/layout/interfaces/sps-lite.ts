import { IBackendApiEntity as ISpsLiteBackendApiFooter } from "../../footer/interfaces/sps-lite";
import { IBackendApiEntity as ISpsLiteBackendApiNavbar } from "../../navbar/interfaces/sps-lite";
import { IBackendApiEntity as ISpsLiteBackendApiPage } from "../../page/interfaces/sps-lite";
import { IBackendApiEntity as ISpsLiteBackendApiSidebar } from "../../sidebar/interfaces/sps-lite";
import { IBackendApiEntity as ISpsLiteBackendApiTopbar } from "../../topbar/interfaces/sps-lite";

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
  topbar?: ISpsLiteBackendApiTopbar | null;
  navbar?: ISpsLiteBackendApiNavbar | null;
  sidebar?: ISpsLiteBackendApiSidebar | null;
  footer?: ISpsLiteBackendApiFooter | null;
  pages?: ISpsLiteBackendApiPage[] | null;
}
