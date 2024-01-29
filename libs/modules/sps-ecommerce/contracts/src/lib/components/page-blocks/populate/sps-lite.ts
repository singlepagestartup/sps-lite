import { populate as checkoutFormBlockPopulate } from "../checkout-form-block/populate";
import { populate as productsListBlockPopulate } from "../products-list-block/populate";
import { populate as shoppingCartBlockPopulate } from "../shopping-cart-block/populate";

export const populate = {
  ...checkoutFormBlockPopulate,
  ...productsListBlockPopulate,
  ...shoppingCartBlockPopulate,
};
