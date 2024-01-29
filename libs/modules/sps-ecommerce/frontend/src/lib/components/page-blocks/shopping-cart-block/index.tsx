import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { IComponent as IBackendPageBlock } from "@sps/sps-ecommerce-contracts/lib/components/page-blocks/shopping-cart-block/interfaces";
import { IPage } from "@sps/sps-ecommerce-contracts/lib/props";

export interface IPageBlock extends IBackendPageBlock, IPage {}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export default function ShoppingCartBlock(props: IPageBlock) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
