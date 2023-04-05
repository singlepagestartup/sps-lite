import { FC } from "react";
import {
  ISpsLiteHeroSectionBlock,
  variants as spsLiteVariants,
} from "./sps-lite";
import { ISpsHeroSectionBlock, variants as spsVariants } from "./sps";

const variants = {
  ...spsLiteVariants,
  ...spsVariants,
};

export default function HeroSections<
  T extends ISpsLiteHeroSectionBlock | ISpsHeroSectionBlock
>(props: T) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<T>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
