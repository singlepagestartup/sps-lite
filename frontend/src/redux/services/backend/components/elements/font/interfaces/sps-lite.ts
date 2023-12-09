import { ISpsLiteBackendUploadFile } from "~redux/services/backend/models/upload/interfaces/sps-lite";

export interface ISpsLiteBackendFont {
  id: number;
  __component: "elements.font";
  media?: ISpsLiteBackendUploadFile;
  weight: "light" | "regular" | "medium" | "semi_bold" | "bold";
  style: "normal" | "italic";
  variant: "primary" | "default";
}
