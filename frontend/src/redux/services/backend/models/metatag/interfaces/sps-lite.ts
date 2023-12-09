import { ISpsLiteBackendUploadFile } from "../../upload/interfaces/sps-lite";

export interface ISpsLiteBackendMetatag {
  id: number;
  locale: string;
  title: string;
  description: string;
  script?: string | null;
  favicon?: ISpsLiteBackendUploadFile | null;
  uid: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
