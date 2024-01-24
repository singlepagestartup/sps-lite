import { IBackendComponentPageBlock } from "~redux/services/backend/components/page-blocks/interfaces";

export interface IEntity {
  id: number;
  locale: string;
  title: string;
  uid: string | null;
  className: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  variant: "right-side-half-width";
  pageBlocks?: IBackendComponentPageBlock[] | null;
}
