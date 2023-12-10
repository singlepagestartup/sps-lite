import { IBackendComponentPageBlock } from "~redux/services/backend/components/page-blocks/interfaces";

export interface ISpsLiteBackendApiSidebar {
  id: number;
  locale: string;
  title: string;
  uid: string | null;
  className: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  variant: "one-quarter";
  side: "left" | "right";
  pageBlocks?: IBackendComponentPageBlock[] | null;
}
