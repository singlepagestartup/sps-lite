import { FC } from "react";
import { IBackendHeroSectionBlock } from "types/components/page-blocks";
import { variants as spsLiteVariants } from "./sps-lite";

export interface IHeroSectionBlock
  extends Omit<IBackendHeroSectionBlock, `id`> {}

const variants = {
  ...spsLiteVariants,
};

export default function HeroSections(props: IHeroSectionBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<IHeroSectionBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
