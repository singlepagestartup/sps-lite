import { ISpsLiteBackendHeroSectionBlock } from "types/components/page-blocks/sps-lite";
import SimpleCentered from "./SimpleCentered";
import { FC } from "react";

export const variants = {
  "simple-centered": SimpleCentered,
};

export interface ISpsLiteHeroSectionBlock
  extends ISpsLiteBackendHeroSectionBlock {
  [key: string]: any;
}

export default function HeroSections<T extends ISpsLiteHeroSectionBlock>(
  props: T
) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteHeroSectionBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
