import { IModel as ICheckoutFormBlock } from "../checkout-form-block/interfaces";
import { IModel as IProductsListBlock } from "../products-list-block/interfaces";
import { IModel as IShoppingCartBlock } from "../shopping-cart-block/interfaces";

export type IComponent =
  | ICheckoutFormBlock
  | IProductsListBlock
  | IShoppingCartBlock;
