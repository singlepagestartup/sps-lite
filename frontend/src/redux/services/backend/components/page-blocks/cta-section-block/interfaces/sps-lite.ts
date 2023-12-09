import { ISpsLiteBackendUploadFile } from "~redux/services/backend/models/upload/interfaces/sps-lite";
import { ISpsLiteBackendButton } from "../../../elements/button/interfaces/sps-lite";

export interface ISpsLiteBackendCtaSectionBlock {
  id: number;
  __component: "page-blocks.cta-section-block";
  variant: "dark-with-image";
  title: string | null;
  subtitle: string | null;
  description: string | null;
  media?: ISpsLiteBackendUploadFile[];
  additionalMedia?: ISpsLiteBackendUploadFile[];
  anchor: string | null;
  className: string | null;
  buttons?: ISpsLiteBackendButton[];
}
