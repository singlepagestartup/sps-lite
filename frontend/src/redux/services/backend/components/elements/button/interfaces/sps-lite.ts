import { ISpsLiteBackendFlyout } from "~redux/services/backend/models/flyout/interfaces/sps-lite";
import { ISpsLiteBackendUploadFile } from "~redux/services/backend/models/upload/interfaces/sps-lite";

export interface ISpsLiteBackendButton {
  id: number;
  __component?: "elements.button";
  variant: "text" | "primary" | "secondary";
  title: string | null;
  url: string | null;
  description: string | null;
  media?: ISpsLiteBackendUploadFile[] | null;
  additionalMedia?: ISpsLiteBackendUploadFile[] | null;
  className: string | null;
  additionalAttributes: any | null;
  flyout: ISpsLiteBackendFlyout | null;
}
