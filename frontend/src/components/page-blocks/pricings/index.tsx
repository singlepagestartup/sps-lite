import { FC } from "react";
import { IFeature, IMedia } from "types";
import TwoTiersWithExtraTier from "./TwoTiersWithExtraTier";

export interface ITier {
  id: number;
  title: string;
  description?: string;
  features?: IFeature[];
  price: string;
  url?: string;
  period?: number;
  type: `one-time` | `regularly`;
}

export interface IPricings {
  title?: string;
  subtitle?: string;
  description?: string;
  background?: IMedia;
  variant: `two-tiers-with-extra-tier`;
  anchor?: string;
  tiers: ITier[];
}

const variants = {
  "two-tiers-with-extra-tier": TwoTiersWithExtraTier,
};

export default function Pricings(props: IPricings) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IPricings>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
