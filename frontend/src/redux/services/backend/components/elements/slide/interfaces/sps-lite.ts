import { IBackendExtensionUploadApiEntity as IBackendExtensionUploadApiFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";

export interface IComponent {
  id: number;
  __component: "elements.slide";
  buttons?: any[];
  title: string | null;
  subtitle: string | null;
  description: string | null;
  media?: IBackendExtensionUploadApiFile[] | null;
  additionalMedia?: IBackendExtensionUploadApiFile[] | null;
}
