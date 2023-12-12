import { IComponent as IBackendComponentFont } from "~redux/services/backend/components/elements/font/interfaces";

export interface IEntity {
  id: number;
  locale: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  theme: any;
  fonts?: IBackendComponentFont[] | null;
  _meta?: any;
}
