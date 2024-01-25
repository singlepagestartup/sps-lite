import { IBackendComponentPageBlock } from "../../../components/page-blocks/interfaces/index";

export interface IEntity {
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
