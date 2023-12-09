import { ISpsLiteBackendFont } from "~redux/services/backend/components/elements/font/interfaces/sps-lite";

export interface ISpsLiteBackendTheme {
  id: number;
  locale: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  theme: any;
  fonts?: ISpsLiteBackendFont[] | null;
  _meta?: any;
}
