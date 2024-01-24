import { IEntity } from "../interfaces/sps-lite";
import { entity as button } from "~redux/services/backend/components/elements/button/mock/sps-lite";

export const entity: IEntity = {
  id: 1,
  title: "Lite",
  description: "If you're just starting out",
  type: "one-time",
  period: null,
  createdAt: "2023-02-14T08:49:14.623Z",
  updatedAt: "2023-02-14T08:49:53.551Z",
  publishedAt: "2023-02-14T22:48:50.378Z",
  buttons: [{ ...button }],
};
