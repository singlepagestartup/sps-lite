import { ISpsLiteBackendExtensionUploadApiFile } from "../../../extensions/upload/api/file/interfaces/sps-lite";

export interface IBackendApiEntity {
  id: number;
  name: string | null;
  title: string | null;
  subtitle: string | null;
  rating: number | null;
  description: string | null;
  media?: ISpsLiteBackendExtensionUploadApiFile[] | null;
  additionalMedia?: ISpsLiteBackendExtensionUploadApiFile[] | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
