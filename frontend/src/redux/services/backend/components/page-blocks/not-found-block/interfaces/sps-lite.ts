import { ISpsLiteBackendUploadFile } from "~redux/services/backend/models/upload/interfaces/sps-lite";
import { ISpsLiteBackendButton } from "../../../elements/button/interfaces/sps-lite";

export interface ISpsLiteBackendNotFoundBlock {
  id: number;
  __component: "page-blocks.not-found-block";
  variant: "simple";
  title: string | null;
  subtitle: string | null;
  description: string | null;
  className: string | null;
  buttons?: ISpsLiteBackendButton[] | null;
  media?: ISpsLiteBackendUploadFile[] | null;
  additionalMedia?: ISpsLiteBackendUploadFile[] | null;
  anchor: string | null;
}
