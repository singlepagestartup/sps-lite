import { IBackendApiEntity as ISpsLiteBackendApiFlyout } from "~redux/services/backend/api/flyout/interfaces/sps-lite";
import { ISpsLiteBackendExtensionUploadApiFile } from "~redux/services/backend/extensions/upload/api/file/interfaces/sps-lite";

export interface IBackendComponentElement {
  id: number;
  __component?: "elements.button";
  variant: "text" | "primary" | "secondary";
  title: string | null;
  url: string | null;
  description: string | null;
  media?: ISpsLiteBackendExtensionUploadApiFile[] | null;
  additionalMedia?: ISpsLiteBackendExtensionUploadApiFile[] | null;
  className: string | null;
  additionalAttributes: any | null;
  flyout: ISpsLiteBackendApiFlyout | null;
}
