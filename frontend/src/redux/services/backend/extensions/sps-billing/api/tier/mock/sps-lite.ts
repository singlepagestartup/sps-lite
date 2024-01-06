import { IEntity } from "../interfaces/sps-lite";
import { entity as currency } from "~redux/services/backend/extensions/sps-billing/api/currency/mock/sps-lite";
import { entity as feature } from "~redux/services/backend/components/elements/feature/mock/sps-lite";
import { entity as button } from "~redux/services/backend/components/elements/button/mock/sps-lite";

export const entity: IEntity = {
  id: 1,
  title: "Lite",
  description: "If you're just starting out",
  price: null,
  type: "one-time",
  period: null,
  oldPrice: null,
  createdAt: "2023-02-14T08:49:14.623Z",
  updatedAt: "2023-02-14T08:49:53.551Z",
  publishedAt: "2023-02-14T22:48:50.378Z",
  features: Array(4).fill(feature),
  currency: { ...currency },
  buttons: [{ ...button }],
};
