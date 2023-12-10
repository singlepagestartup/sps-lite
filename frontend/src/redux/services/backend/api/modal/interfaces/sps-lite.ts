import { ISpsLiteBackendPageBlock } from "types/components/page-blocks/sps-lite";

export interface ISpsLiteBackendApiModal {
  id: number;
  title: string | null;
  variant: "simple";
  className: string | null;
  dialogPanelClassName: string | null;
  pageBlocks?: ISpsLiteBackendPageBlock[] | null;
  uid: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
