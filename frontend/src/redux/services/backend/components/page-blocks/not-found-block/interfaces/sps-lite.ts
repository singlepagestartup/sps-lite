import { ISpsLiteBackendExtensionUploadApiFile } from "~redux/services/backend/extensions/upload/api/file/interfaces/sps-lite";
import { ISpsLiteBackendComponentButton } from "../../../elements/button/interfaces/sps-lite";

export interface ISpsLiteBackendComponentNotFoundBlock {
  id: number;
  __component: "page-blocks.not-found-block";
  variant: "simple";
  title: string | null;
  subtitle: string | null;
  description: string | null;
  className: string | null;
  buttons?: ISpsLiteBackendComponentButton[] | null;
  media?: ISpsLiteBackendExtensionUploadApiFile[] | null;
  additionalMedia?: ISpsLiteBackendExtensionUploadApiFile[] | null;
  anchor: string | null;
}
