import { FC } from "react";
import { ISpsLitePricingsBlock, variants as spsLiteVariants } from "./sps-lite";

const variants = {
  ...spsLiteVariants,
};

export default function Pricings<T extends ISpsLitePricingsBlock>(props: T) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<T>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
