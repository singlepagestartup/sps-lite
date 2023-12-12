import { IBackendExtensionUploadApiEntity as IBackendExtensionUploadApiFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";

export interface IComponent {
  id: number;
  __component: "elements.font";
  media?: IBackendExtensionUploadApiFile;
  weight: "light" | "regular" | "medium" | "semi_bold" | "bold";
  style: "normal" | "italic";
  variant: "primary" | "default";
}
