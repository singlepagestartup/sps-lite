// nx won't fix issue with circular types import
// https://github.com/nrwl/nx/issues/9083
// import type { IEntity as IBackendCart } from "@sps/sps-ecommerce-contracts/lib/entities/cart/interfaces";
// import { IEntity as IModelRef } from "@sps/buildable";

export interface IEntity {
  id: number;
  username: string;
  email: string;
  provider: "local";
  createdAt: string;
  updatedAt: string;
  cart?: unknown | null;
}
