import { FC } from "react";
import { IMedia } from "types";
import { IBackendTier } from "types/models";
import TwoTiersWithExtraTier from "./TwoTiersWithExtraTier";

export interface IPricingsBlock {
  title: string | null;
  subtitle: string | null;
  description: string | null;
  background?: IMedia;
  variant: keyof typeof variants;
  anchor?: string;
  tiers: IBackendTier[];
  className: string | null;
}

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
