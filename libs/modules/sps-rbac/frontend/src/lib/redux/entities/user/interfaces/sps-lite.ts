import type { IEntity as IBackendCart } from "@sps/sps-ecommerce-frontend/lib/redux/entities/cart/interfaces";

export interface IEntity {
  id: number;
  username: string;
  email: string;
  provider: "local";
  createdAt: string;
  updatedAt: string;
  cart?: IBackendCart | null;
}
