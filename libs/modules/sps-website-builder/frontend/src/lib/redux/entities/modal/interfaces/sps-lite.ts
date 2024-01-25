import { IBackendComponentPageBlock } from "../../../components/page-blocks/interfaces/index";

export interface IEntity {
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
