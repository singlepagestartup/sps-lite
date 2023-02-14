import { FC } from "react";
import { IPricings } from "types";
import TwoTiersWithExtraTier from "./TwoTiersWithExtraTier";

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
