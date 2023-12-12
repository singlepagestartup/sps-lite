import { IBackendComponentElement as ISpsLiteBackendComponentFont } from "~redux/services/backend/components/elements/font/interfaces/sps-lite";

export interface IBackendApiEntity {
  id: number;
  locale: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  theme: any;
  fonts?: ISpsLiteBackendComponentFont[] | null;
  _meta?: any;
}
