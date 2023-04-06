import { ISpsLiteBackendHeroSectionBlock } from "types/components/page-blocks/sps-lite";
import SimpleCentered from "./SimpleCentered";
import { FC } from "react";

export interface ISpsLiteHeroSectionBlock
  extends ISpsLiteBackendHeroSectionBlock {
  [key: string]: any;
}

export const variants = {
  "simple-centered": SimpleCentered,
};

export default function HeroSections(props: ISpsLiteHeroSectionBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteHeroSectionBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
