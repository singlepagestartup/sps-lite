import { ISpsLiteBackendFeature } from "~redux/services/backend/components/elements/feature/interfaces/sps-lite";
import { ISpsLiteBackendCurrency } from "../../currency/interfaces/sps-lite";
import { ISpsLiteBackendButton } from "~redux/services/backend/components/elements/button/interfaces/sps-lite";

export interface ISpsLiteBackendTier {
  id: number;
  title: string | null;
  description: string | null;
  features?: ISpsLiteBackendFeature[] | null;
  price: string | null;
  oldPrice: string | null;
  period: number | null;
  currency?: ISpsLiteBackendCurrency | null;
  type: "one-time" | "regularly";
  buttons?: ISpsLiteBackendButton[] | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
