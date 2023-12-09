import { ISpsLiteBackendUploadFile } from "../../upload/interfaces/sps-lite";

export interface ISpsLiteBackendLoader {
  id: number;
  locale: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  className: string | null;
  anchor: string | null;
  variant: "simple";
  media?: ISpsLiteBackendUploadFile[] | null;
  additionalMedia?: ISpsLiteBackendUploadFile[] | null;
}
