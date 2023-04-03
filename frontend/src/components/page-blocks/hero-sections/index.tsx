import { FC } from "react";
import { IBackendHeroSectionBlock } from "types/components/page-blocks";
import { spsLiteVariants } from "./sps-lite";
import { spsVariants } from "./sps";

export interface IHeroSectionBlock
  extends Omit<IBackendHeroSectionBlock, `id`> {}

const variants = {
  ...spsLiteVariants,
  ...spsVariants,
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
