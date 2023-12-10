import { ISpsLiteBackendComponentSliderBlock } from "~redux/services/backend/components/page-blocks/slider-block/interfaces/sps-lite";
import Simple from "./Simple";
import { FC } from "react";

export interface ISpsLiteSliderBlock
  extends ISpsLiteBackendComponentSliderBlock {
  showSkeletons?: boolean;
}

export const variants = {
  simple: Simple,
};

export default function Slider(props: ISpsLiteSliderBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISpsLiteSliderBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
