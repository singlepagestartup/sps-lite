import { IEntity as IBackendCart } from "~redux/services/backend/extensions/sps-ecommerce/api/cart/interfaces";

export interface IEntity {
  id: number;
  username: string;
  email: string;
  provider: "local";
  createdAt: string;
  updatedAt: string;
  cart?: IBackendCart | null;
}
