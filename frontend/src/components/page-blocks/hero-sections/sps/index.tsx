import { ISpsBackendHeroSectionBlock } from "types/components/page-blocks/sps";
import Split from "./Split";
import { FC } from "react";

export interface ISpsHeroSectionBlock extends ISpsBackendHeroSectionBlock {
  [key: string]: any;
}

export const variants = {
  split: Split,
};

export default function HeroSections(props: ISpsHeroSectionBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsHeroSectionBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
