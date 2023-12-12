import { IBackendExtensionUploadApiEntity as IBackendExtensionUploadApiFile } from "~redux/services/backend/extensions/upload/api/file/interfaces";
import { IBackendComponentElement as IBackendComponentFeature } from "../../../elements/feature/interfaces";

export interface IBackendComponentPageBlock {
  id: number;
  __component: "page-blocks.incentives-block";
  variant: "four-column-with-illustrations";
  features?: IBackendComponentFeature[] | null;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  className: string | null;
  media?: IBackendExtensionUploadApiFile[] | null;
  additionalMedia?: IBackendExtensionUploadApiFile[] | null;
  anchor: string | null;
}
