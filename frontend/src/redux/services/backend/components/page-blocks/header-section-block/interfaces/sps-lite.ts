import { IBackendExtensionUploadApiEntity as IBackendExtensionUploadApiFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";

export interface IBackendComponentPageBlock {
  id: number;
  __component: "page-blocks.header-section-block";
  variant: "simple-centered";
  title: string | null;
  description: string | null;
  subtitle: string | null;
  className: string | null;
  media?: IBackendExtensionUploadApiFile[] | null;
  additionalMedia?: IBackendExtensionUploadApiFile[] | null;
  anchor: string | null;
}
