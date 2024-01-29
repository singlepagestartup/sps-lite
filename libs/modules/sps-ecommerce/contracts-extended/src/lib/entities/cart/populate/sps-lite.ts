import { populate as parentPopulate } from "@sps/sps-ecommerce-contracts/lib/entities/cart/populate";
import { populate as orderPopulate } from "@sps/sps-ecommerce-contracts/lib/entities/order/populate";
import { populate as userPopulate } from "@sps/sps-rbac-contracts/lib/entities/user/populate";

export const populate = {
  ...parentPopulate,
  orders: {
    populate: orderPopulate,
  },
  user: {
    populate: userPopulate,
  },
};
