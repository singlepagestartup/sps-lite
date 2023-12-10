import { ISpsLiteBackendPageBlock } from "types/components/page-blocks/sps-lite";

export interface ISpsLiteBackendApiFlyout {
  id: number;
  locale: string;
  title: string;
  uid: string | null;
  className: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  variant: "simple";
  pageBlocks?: ISpsLiteBackendPageBlock[] | null;
}
