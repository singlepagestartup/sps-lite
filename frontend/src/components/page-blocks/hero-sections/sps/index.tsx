import { ISpsBackendComponentHeroSectionBlock } from "~redux/services/backend/components/page-blocks/hero-section-block/interfaces/sps";
import Split from "./Split";
import { FC } from "react";

export interface ISpsHeroSectionBlock
  extends ISpsBackendComponentHeroSectionBlock {
  showSkeletons?: boolean;
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
