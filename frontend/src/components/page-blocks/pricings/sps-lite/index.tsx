import { ISpsLiteBackendPricingsBlock } from "types/components/page-blocks/sps-lite";
import TwoColumnsCard from "./TwoColumnsCard";
import { FC } from "react";

export interface ISpsLitePricingsBlock extends ISpsLiteBackendPricingsBlock {
  showSkeletons?: boolean;
}

export const variants = {
  "two-columns-card": TwoColumnsCard,
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
