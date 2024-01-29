import { populate as parentPopulate } from "@sps/sps-rbac-contracts/lib/entities/user/populate";
import { populate as cartPopulate } from "@sps/sps-ecommerce-contracts/lib/entities/cart/populate";

export const populate = {
  ...parentPopulate,
  cart: {
    populate: cartPopulate,
  },
};
