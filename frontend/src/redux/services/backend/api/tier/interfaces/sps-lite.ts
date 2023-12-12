import { IBackendComponentElement as ISpsLiteBackendComponentFeature } from "~redux/services/backend/components/elements/feature/interfaces/sps-lite";
import { IBackendApiEntity as ISpsLiteBackendApiCurrency } from "../../currency/interfaces/sps-lite";
import { IBackendComponentElement as ISpsLiteBackendComponentButton } from "~redux/services/backend/components/elements/button/interfaces/sps-lite";

export interface IBackendApiEntity {
  id: number;
  title: string | null;
  description: string | null;
  features?: ISpsLiteBackendComponentFeature[] | null;
  price: string | null;
  oldPrice: string | null;
  period: number | null;
  currency?: ISpsLiteBackendApiCurrency | null;
  type: "one-time" | "regularly";
  buttons?: ISpsLiteBackendComponentButton[] | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
