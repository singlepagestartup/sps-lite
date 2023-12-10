import { ISpsLiteBackendPageBlock } from "types/components/page-blocks/sps-lite";

export interface ISpsLiteBackendApiFooter {
  id: number;
  locale: string;
  title: string;
  uid: string | null;
  className: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  variant: "boxed";
  pageBlocks?: ISpsLiteBackendPageBlock[] | null;
}
