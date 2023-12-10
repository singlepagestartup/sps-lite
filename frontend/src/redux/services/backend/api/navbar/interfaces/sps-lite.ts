import { ISpsLiteBackendPageBlock } from "types/components/page-blocks/sps-lite";

export interface ISpsLiteBackendApiNavbar {
  id: number;
  locale: string;
  title: string;
  uid: string | null;
  className: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  variant: "boxed";
  position: "fixed";
  side: "top";
  pageBlocks?: ISpsLiteBackendPageBlock[] | null;
}
