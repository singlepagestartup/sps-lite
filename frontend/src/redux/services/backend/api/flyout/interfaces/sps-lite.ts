import { IBackendComponentPageBlock } from "~redux/services/backend/components/page-blocks/interfaces";

export interface IBackendApiEntity {
  id: number;
  locale: string;
  title: string;
  uid: string | null;
  className: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  variant: "simple";
  pageBlocks?: IBackendComponentPageBlock[] | null;
}
