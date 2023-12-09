import { ISpsLiteBackendUploadFile } from "~redux/services/backend/models/upload/interfaces/sps-lite";
import { ISpsLiteBackendButton } from "../../../elements/button/interfaces/sps-lite";

export interface ISpsLiteBackendHeroSectionBlock {
  id: number;
  __component: "page-blocks.hero-section-block";
  variant: "simple-centered";
  className: string | null;
  title: string | null;
  description: string | null;
  buttons?: ISpsLiteBackendButton[] | null;
  media?: ISpsLiteBackendUploadFile[] | null;
  anchor: string | null;
  additionalMedia?: ISpsLiteBackendUploadFile[];
}
