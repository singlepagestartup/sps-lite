import { populate as parentPopulate } from "@sps/sps-rbac-models-user-contracts";
import { populate as cartPopulate } from "@sps/sps-ecommerce-models-cart-contracts";

export const populate = {
  ...parentPopulate,
  cart: {
    populate: cartPopulate,
  },
};
