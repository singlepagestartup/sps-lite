import { ISpsLiteBackendApiTier } from "../../tier/interfaces/sps-lite";

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
