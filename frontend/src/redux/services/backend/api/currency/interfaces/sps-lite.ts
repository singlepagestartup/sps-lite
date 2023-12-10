import { ISpsLiteBackendApiTier } from "~redux/services/backend/api/tier/interfaces/sps-lite";

export interface ISpsLiteBackendApiCurrency {
  id: number;
  title: string | null;
  unicode: string | null;
  isDefault: boolean | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  tiers?: ISpsLiteBackendApiTier;
}
