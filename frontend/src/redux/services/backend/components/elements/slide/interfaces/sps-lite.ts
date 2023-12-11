import { ISpsLiteBackendExtensionUploadApiFile } from "~redux/services/backend/extensions/upload/api/file/interfaces/sps-lite";

export interface IBackendComponentElement {
  id: number;
  __component: "elements.slide";
  buttons?: any[];
  title: string | null;
  subtitle: string | null;
  description: string | null;
  media?: ISpsLiteBackendExtensionUploadApiFile[] | null;
  additionalMedia?: ISpsLiteBackendExtensionUploadApiFile[] | null;
}
