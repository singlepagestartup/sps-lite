import { populate as parentPopulate } from "@sps/sps-ecommerce-contracts/lib/models/cart/populate";
import { populate as orderPopulate } from "@sps/sps-ecommerce-contracts/lib/models/order/populate";
import { populate as userPopulate } from "@sps/sps-rbac-contracts/lib/models/user/populate";

export const populate = {
  ...parentPopulate,
  orders: {
    populate: orderPopulate,
  },
  user: {
    populate: userPopulate,
  },
};
