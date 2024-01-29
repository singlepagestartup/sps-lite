import { IComponent as ICheckoutFormBlock } from "../checkout-form-block/interfaces";
import { IComponent as IProductsListBlock } from "../products-list-block/interfaces";
import { IComponent as IShoppingCartBlock } from "../shopping-cart-block/interfaces";

export type IComponent =
  | ICheckoutFormBlock
  | IProductsListBlock
  | IShoppingCartBlock;
