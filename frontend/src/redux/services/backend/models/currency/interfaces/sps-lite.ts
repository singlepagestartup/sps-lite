import { ISpsLiteBackendTier } from "types/collection-types/sps-lite";

export interface ISpsLiteBackendCurrency {
  id: number;
  title: string | null;
  unicode: string | null;
  isDefault: boolean | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  tiers?: ISpsLiteBackendTier;
}
