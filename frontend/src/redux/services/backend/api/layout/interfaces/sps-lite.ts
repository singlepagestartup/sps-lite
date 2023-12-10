import { ISpsLiteBackendApiFooter } from "../../footer/interfaces/sps-lite";
import { ISpsLiteBackendApiNavbar } from "../../navbar/interfaces/sps-lite";
import { ISpsLiteBackendApiPage } from "../../page/interfaces/sps-lite";
import { ISpsLiteBackendApiSidebar } from "../../sidebar/interfaces/sps-lite";
import { ISpsLiteBackendApiTopbar } from "../../topbar/interfaces/sps-lite";

export interface ISpsLiteBackendApiLayout {
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
