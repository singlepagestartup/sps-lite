import { IPageBlock } from "..";
import SingleStepWithTier from "./SingleStepWithTier";
import SingleStepWithProduct from "./SingleStepWithProduct";
import SingleStepWithCart from "./SingleStepWithCart";

export const variants = {
  "single-step-with-tier": SingleStepWithTier,
  "single-step-with-product": SingleStepWithProduct,
  "single-step-with-cart": SingleStepWithCart,
};

export default function SpsLite(props: IPageBlock) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
