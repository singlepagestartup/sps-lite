import { populate as parentPopulate } from "@sps/sps-rbac-user-contracts";
import { populate as cartPopulate } from "@sps/sps-ecommerce-cart-contracts";

export const populate = {
  ...parentPopulate,
  cart: {
    populate: cartPopulate,
  },
};
