import { ISpsLiteBackendExtensionUploadApiFile } from "~redux/services/backend/extensions/upload/api/file/interfaces/sps-lite";

export interface ISpsLiteBackendComponentFont {
  id: number;
  __component: "elements.font";
  media?: ISpsLiteBackendExtensionUploadApiFile;
  weight: "light" | "regular" | "medium" | "semi_bold" | "bold";
  style: "normal" | "italic";
  variant: "primary" | "default";
}
