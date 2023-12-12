import { IBackendExtensionUploadApiEntity as IBackendExtensionUploadApiFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";

export interface IComponent {
  id: number;
  __component: "elements.input-option";
  title: string | null;
  description: string | null;
  media?: IBackendExtensionUploadApiFile[] | null;
  additionalMedia?: IBackendExtensionUploadApiFile[] | null;
  extraMedia?: IBackendExtensionUploadApiFile[] | null;
}
