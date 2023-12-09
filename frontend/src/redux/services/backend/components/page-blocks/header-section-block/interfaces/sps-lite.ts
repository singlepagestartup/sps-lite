import { ISpsLiteBackendUploadFile } from "~redux/services/backend/models/upload/interfaces/sps-lite";

export interface ISpsLiteBackendHeaderSectionBlock {
  id: number;
  __component: "page-blocks.header-section-block";
  variant: "simple-centered";
  title: string | null;
  description: string | null;
  subtitle: string | null;
  className: string | null;
  media?: ISpsLiteBackendUploadFile[] | null;
  additionalMedia?: ISpsLiteBackendUploadFile[] | null;
  anchor: string | null;
}
