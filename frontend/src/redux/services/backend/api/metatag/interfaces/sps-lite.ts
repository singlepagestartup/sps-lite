import { IBackendExtensionUploadApiEntity as IBackendExtensionUploadApiFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";

export interface IEntity {
  id: number;
  locale: string;
  title: string;
  description: string;
  script?: string | null;
  favicon?: IBackendExtensionUploadApiFile | null;
  uid: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
