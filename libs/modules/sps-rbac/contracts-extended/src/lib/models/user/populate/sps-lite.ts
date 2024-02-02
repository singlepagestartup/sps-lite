import { populate as parentPopulate } from "@sps/sps-rbac-contracts/lib/models/user/populate";
import { populate as cartPopulate } from "@sps/sps-ecommerce-contracts/lib/models/cart/populate";

export const populate = {
  ...parentPopulate,
  cart: {
    populate: cartPopulate,
  },
};
