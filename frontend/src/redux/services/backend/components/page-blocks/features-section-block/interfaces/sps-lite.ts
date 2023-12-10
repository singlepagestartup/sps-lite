import { ISpsLiteBackendExtensionUploadApiFile } from "~redux/services/backend/extensions/upload/api/file/interfaces/sps-lite";
import { ISpsLiteBackendComponentFeature } from "../../../elements/feature/interfaces/sps-lite";

export interface ISpsLiteBackendComponentFeaturesSectionBlock {
  id: number;
  __component: "page-blocks.features-section-block";
  variant: "with-icon";
  features?: ISpsLiteBackendComponentFeature[] | null;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  anchor: string | null;
  className: string | null;
  media?: ISpsLiteBackendExtensionUploadApiFile[] | null;
  additionalMedia?: ISpsLiteBackendExtensionUploadApiFile[] | null;
}
