import { populate as parentPopulate } from "@sps/sps-ecommerce-cart-contracts";
import { populate as orderPopulate } from "@sps/sps-ecommerce-order-contracts";
import { populate as userPopulate } from "@sps/sps-rbac-user-contracts";

export const populate = {
  ...parentPopulate,
  orders: {
    populate: orderPopulate,
  },
  user: {
    populate: userPopulate,
  },
};
