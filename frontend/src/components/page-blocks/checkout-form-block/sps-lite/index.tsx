import { IPageBlock } from "..";
import SingleStepWithTier from "./SingleStepWithTier";
import SingleStepWithProduct from "./SingleStepWithProduct";

export const variants = {
  "single-step-with-tier": SingleStepWithTier,
  "single-step-with-product": SingleStepWithProduct,
};

export default function SpsLite(props: IPageBlock) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
