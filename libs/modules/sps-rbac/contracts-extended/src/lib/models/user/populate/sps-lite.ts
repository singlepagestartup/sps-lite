import { populate as parentPopulate } from "@sps/sps-rbac-contracts/lib/models/user/populate";
import { populate as cartPopulate } from "@sps/sps-ecommerce-cart-contracts";

export const populate = {
  ...parentPopulate,
  cart: {
    populate: cartPopulate,
  },
};
