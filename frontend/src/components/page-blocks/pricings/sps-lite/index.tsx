import { ISpsLiteBackendPricingsBlock } from "types/components/page-blocks/sps-lite";
import TwoColumns from "./TwoColumns";
import { FC } from "react";

export interface ISpsLitePricingsBlock extends ISpsLiteBackendPricingsBlock {
  isLoading?: boolean;
}

export const variants = {
  "two-columns": TwoColumns,
};

export default function Pricings(props: ISpsLitePricingsBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLitePricingsBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
