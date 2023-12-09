import { ISpsLiteBackendTier } from "../../tier/interfaces/sps-lite";

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
