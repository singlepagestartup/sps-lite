import type { IComponent as IFont } from "../../../components/elements/font/interfaces";

export interface IEntity {
  id: number;
  locale: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  theme: any;
  fonts?: IFont[] | null;
  _meta?: any;
}
