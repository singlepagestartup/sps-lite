import { IBackendExtensionUploadApiEntity as IBackendExtensionUploadApiFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";
import { IBackendComponentElement as IBackendComponentButton } from "../../../elements/button/interfaces";

export interface IBackendComponentPageBlock {
  id: number;
  __component: "page-blocks.hero-section-block";
  variant: "simple-centered";
  className: string | null;
  title: string | null;
  description: string | null;
  buttons?: IBackendComponentButton[] | null;
  media?: IBackendExtensionUploadApiFile[] | null;
  anchor: string | null;
  additionalMedia?: IBackendExtensionUploadApiFile[];
}
