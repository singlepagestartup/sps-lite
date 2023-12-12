import { IBackendExtensionUploadApiEntity as IBackendExtensionUploadApiFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";

export interface IEntity {
  id: number;
  locale: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  className: string | null;
  anchor: string | null;
  variant: "simple";
  media?: IBackendExtensionUploadApiFile[] | null;
  additionalMedia?: IBackendExtensionUploadApiFile[] | null;
}
