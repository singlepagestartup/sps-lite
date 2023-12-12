import { IBackendExtensionUploadApiEntity as IBackendExtensionUploadApiFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";

export interface IComponent {
  id: number;
  __component: "elements.feature";
  title: string | null;
  description: string | null;
  subtitle: string | null;
  media?: IBackendExtensionUploadApiFile[] | null;
  additionalMedia?: IBackendExtensionUploadApiFile[] | null;
}
