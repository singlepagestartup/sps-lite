import { ISpsLiteBackendUploadFile } from "~redux/services/backend/models/upload/interfaces/sps-lite";
import { ISpsLiteBackendFeature } from "../../../elements/feature/interfaces/sps-lite";

export interface ISpsLiteBackendFeaturesSectionBlock {
  id: number;
  __component: "page-blocks.features-section-block";
  variant: "with-icon";
  features?: ISpsLiteBackendFeature[] | null;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  anchor: string | null;
  className: string | null;
  media?: ISpsLiteBackendUploadFile[] | null;
  additionalMedia?: ISpsLiteBackendUploadFile[] | null;
}
