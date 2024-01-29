import type { IEntity as IBackendCart } from "@sps/sps-ecommerce-contracts/lib/entities/cart/interfaces";

export interface IEntity {
  id: number;
  username: string;
  email: string;
  provider: "local";
  createdAt: string;
  updatedAt: string;
  cart?: IBackendCart | null;
}
