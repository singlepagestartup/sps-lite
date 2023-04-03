import { FC } from "react";
import TwoTiersWithExtraTier from "./TwoTiersWithExtraTier";
import { IBackendPricingsBlock } from "types/page-blocks";

export interface IPricingsBlock extends IBackendPricingsBlock {}

const variants = {
  "two-tiers-with-extra-tier": TwoTiersWithExtraTier,
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
