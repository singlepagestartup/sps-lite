import { ISpsLiteBackendExtensionUploadApiFile } from "~redux/services/backend/extensions/upload/api/file/interfaces/sps-lite";
import { IBackendComponentElement as ISpsLiteBackendComponentFeature } from "../../../elements/feature/interfaces/sps-lite";

export interface IBackendComponentPageBlock {
  id: number;
  __component: "page-blocks.incentives-block";
  variant: "four-column-with-illustrations";
  features?: ISpsLiteBackendComponentFeature[] | null;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  className: string | null;
  media?: ISpsLiteBackendExtensionUploadApiFile[] | null;
  additionalMedia?: ISpsLiteBackendExtensionUploadApiFile[] | null;
  anchor: string | null;
}
