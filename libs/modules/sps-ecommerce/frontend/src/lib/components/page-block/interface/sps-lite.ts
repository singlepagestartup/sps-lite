import type { IModel as ICheckoutFormBlock } from "@sps/sps-ecommerce-contracts/lib/models/checkout-form-block/interfaces";
import type { IModel as IProductsListBlock } from "@sps/sps-ecommerce-contracts/lib/models/products-list-block/interfaces";
import type { IModel as IShoppingCartBlock } from "@sps/sps-ecommerce-contracts/lib/models/shopping-cart-block/interfaces";
import { Dispatch, SetStateAction } from "react";

type IPageBlock = ICheckoutFormBlock | IProductsListBlock | IShoppingCartBlock;

export type IComponentProps = IPageBlock;

export type IComponentPropsExtended = IComponentProps & {
  isServer: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  closeModal?: () => void;
};
