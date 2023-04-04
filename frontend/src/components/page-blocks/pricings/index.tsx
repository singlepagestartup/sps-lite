import { FC } from "react";
import { IBackendPricingsBlock } from "types/components/page-blocks";
import { spsLiteVariants } from "./sps-lite";

export interface IPricingsBlock extends IBackendPricingsBlock {}

const variants = {
  ...spsLiteVariants,
};

export default function Pricings(props: IPricingsBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IPricingsBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
