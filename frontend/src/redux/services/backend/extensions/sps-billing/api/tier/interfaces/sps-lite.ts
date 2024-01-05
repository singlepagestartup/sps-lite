import { IComponent as IBackendComponentFeature } from "~redux/services/backend/components/elements/feature/interfaces";
import { IEntity as IBackendCurrency } from "../../currency/interfaces";
import { IComponent as IBackendComponentButton } from "~redux/services/backend/components/elements/button/interfaces";

export interface IEntity {
  id: number;
  title: string | null;
  description: string | null;
  features?: IBackendComponentFeature[] | null;
  price: string | null;
  oldPrice: string | null;
  period: number | null;
  currency?: IBackendCurrency | null;
  type: "one-time" | "regularly";
  buttons?: IBackendComponentButton[] | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
