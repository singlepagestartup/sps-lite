import { IBackendExtensionUploadApiEntity as IBackendExtensionUploadApiFile } from "../../../extensions/upload/api/file/interfaces";

export interface IEntity {
  id: number;
  name: string | null;
  title: string | null;
  subtitle: string | null;
  rating: number | null;
  description: string | null;
  media?: IBackendExtensionUploadApiFile[] | null;
  additionalMedia?: IBackendExtensionUploadApiFile[] | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
