import { IEntity as IBackendFlyout } from "~redux/services/backend/api/flyout/interfaces";
import { IBackendExtensionUploadApiEntity as IBackendExtensionUploadApiFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";

export interface IBackendComponentElement {
  id: number;
  __component?: "elements.button";
  variant: "text" | "primary" | "secondary";
  title: string | null;
  url: string | null;
  description: string | null;
  media?: IBackendExtensionUploadApiFile[] | null;
  additionalMedia?: IBackendExtensionUploadApiFile[] | null;
  className: string | null;
  additionalAttributes: any | null;
  flyout: IBackendFlyout | null;
}
