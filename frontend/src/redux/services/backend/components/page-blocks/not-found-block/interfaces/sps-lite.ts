import { IBackendExtensionUploadApiEntity as IBackendExtensionUploadApiFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";
import { IComponent as IBackendComponentButton } from "../../../elements/button/interfaces";

export interface IBackendComponentPageBlock {
  id: number;
  __component: "page-blocks.not-found-block";
  variant: "simple";
  title: string | null;
  subtitle: string | null;
  description: string | null;
  className: string | null;
  buttons?: IBackendComponentButton[] | null;
  media?: IBackendExtensionUploadApiFile[] | null;
  additionalMedia?: IBackendExtensionUploadApiFile[] | null;
  anchor: string | null;
}
