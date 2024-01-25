import type { IComponent as IBackendComponentFont } from "@sps/sps-website-builder-frontend/lib/redux/components/elements/font/interfaces";

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
