import {
  ISpsLiteBackendSidebar,
  ISpsLiteBackendTopbar,
} from "types/collection-types/sps-lite";
import { ISpsLiteBackendFooter } from "../../footer/interfaces/sps-lite";
import { ISpsLiteBackendNavbar } from "../../navbar/interfaces/sps-lite";
import { ISpsLiteBackendPage } from "../../page/interfaces/sps-lite";

export interface ISpsLiteBackendLayout {
  id: number;
  locale: string;
  title: string;
  uid: string | null;
  className: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  variant: "wide" | "boxed";
  topbar?: ISpsLiteBackendTopbar | null;
  navbar?: ISpsLiteBackendNavbar | null;
  sidebar?: ISpsLiteBackendSidebar | null;
  footer?: ISpsLiteBackendFooter | null;
  pages?: ISpsLiteBackendPage[] | null;
}
