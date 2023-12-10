import { ISpsLiteBackendApiTier } from "~redux/services/backend/api/tier/interfaces/sps-lite";
import { ISpsLiteBackendExtensionUploadApiFile } from "~redux/services/backend/extensions/upload/api/file/interfaces/sps-lite";

export interface ISpsLiteBackendComponentPricingsBlock {
  id: number;
  __component: "page-blocks.pricing-block";
  variant: "two-columns-card";
  title: string | null;
  subtitle: string | null;
  anchor: string | null;
  description: string | null;
  media?: ISpsLiteBackendExtensionUploadApiFile[] | null;
  additionalMedia?: ISpsLiteBackendExtensionUploadApiFile[] | null;
  tiers?: ISpsLiteBackendApiTier[] | null;
  className: string | null;
}
