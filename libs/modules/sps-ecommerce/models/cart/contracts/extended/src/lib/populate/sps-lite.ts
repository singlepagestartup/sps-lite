import { populate as parentPopulate } from "@sps/sps-ecommerce-models-cart-contracts";
import { populate as orderPopulate } from "@sps/sps-ecommerce-models-order-contracts";
import { populate as userPopulate } from "@sps/sps-rbac-models-user-contracts";

export const populate = {
  ...parentPopulate,
  orders: {
    populate: orderPopulate,
  },
  user: {
    populate: userPopulate,
  },
};
