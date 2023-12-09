import { ISpsLiteBackendUploadPluginBackendMedia } from "types/plugins/upload/sps-lite";

export interface ISpsLiteBackendLoader {
  id: number;
  locale: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  className: string | null;
  anchor: string | null;
  variant: "simple";
  media?: ISpsLiteBackendUploadPluginBackendMedia[] | null;
  additionalMedia?: ISpsLiteBackendUploadPluginBackendMedia[] | null;
}
