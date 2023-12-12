import { IBackendComponentElement as IBackendComponentFeature } from "~redux/services/backend/components/elements/feature/interfaces";
import { IBackendApiEntity as IBackendApiCurrency } from "../../currency/interfaces";
import { IBackendComponentElement as IBackendComponentButton } from "~redux/services/backend/components/elements/button/interfaces";

export interface IBackendApiEntity {
  id: number;
  title: string | null;
  description: string | null;
  features?: IBackendComponentFeature[] | null;
  price: string | null;
  oldPrice: string | null;
  period: number | null;
  currency?: IBackendApiCurrency | null;
  type: "one-time" | "regularly";
  buttons?: IBackendComponentButton[] | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
