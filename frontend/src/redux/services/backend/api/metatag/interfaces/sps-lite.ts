import { ISpsLiteBackendExtensionUploadApiFile } from "~redux/services/backend/extensions/upload/api/file/interfaces/sps-lite";

export interface IBackendApiEntity {
  id: number;
  locale: string;
  title: string;
  description: string;
  script?: string | null;
  favicon?: ISpsLiteBackendExtensionUploadApiFile | null;
  uid: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
