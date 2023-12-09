import { ISpsLiteBackendUploadFile } from "~redux/services/backend/models/upload/interfaces/sps-lite";

export interface ISpsLiteBackendSlide {
  id: number;
  __component: "elements.slide";
  buttons?: any[];
  title: string | null;
  subtitle: string | null;
  description: string | null;
  media?: ISpsLiteBackendUploadFile[] | null;
  additionalMedia?: ISpsLiteBackendUploadFile[] | null;
}
