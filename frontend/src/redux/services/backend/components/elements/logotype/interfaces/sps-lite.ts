import { ISpsLiteBackendExtensionUploadApiFile } from "~redux/services/backend/extensions/upload/api/file/interfaces/sps-lite";

export interface IBackendComponentElement {
  id: number;
  __component: "elements.logotype";
  media?: ISpsLiteBackendExtensionUploadApiFile[] | null;
  additionalMedia?: ISpsLiteBackendExtensionUploadApiFile[] | null;
  url: string | null;
  title: string | null;
}
