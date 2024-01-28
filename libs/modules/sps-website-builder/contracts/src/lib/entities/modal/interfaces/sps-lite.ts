import { IComponent as IPageBlock } from "../../../components/page-blocks/interfaces";

export interface IEntity {
  id: number;
  title: string | null;
  variant: "simple";
  className: string | null;
  dialogPanelClassName: string | null;
  pageBlocks?: IPageBlock[] | null;
  uid: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
