import { ISpsLiteBackendPricingsBlock } from "types/components/page-blocks/sps-lite";
import SinglePriceWithDetails from "./SinglePriceWithDetails";
import { FC } from "react";

export interface ISpsLitePricingsBlock extends ISpsLiteBackendPricingsBlock {}

export const variants = {
  "single-price-with-details": SinglePriceWithDetails,
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
