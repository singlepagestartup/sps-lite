import { IBackendComponentPageBlock } from "~redux/services/backend/components/page-blocks/interfaces";

export interface IBackendApiEntity {
  id: number;
  title: string | null;
  variant: "simple";
  className: string | null;
  dialogPanelClassName: string | null;
  pageBlocks?: IBackendComponentPageBlock[] | null;
  uid: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
