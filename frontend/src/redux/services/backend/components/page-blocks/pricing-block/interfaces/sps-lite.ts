import { ISpsLiteBackendTier } from "~redux/services/backend/models/tier/interfaces/sps-lite";
import { ISpsLiteBackendUploadFile } from "~redux/services/backend/models/upload/interfaces/sps-lite";

export interface ISpsLiteBackendPricingsBlock {
  id: number;
  __component: "page-blocks.pricing-block";
  variant: "two-columns-card";
  title: string | null;
  subtitle: string | null;
  anchor: string | null;
  description: string | null;
  media?: ISpsLiteBackendUploadFile[] | null;
  additionalMedia?: ISpsLiteBackendUploadFile[] | null;
  tiers?: ISpsLiteBackendTier[] | null;
  className: string | null;
}
