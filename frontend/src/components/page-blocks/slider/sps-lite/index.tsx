import { ISpsLiteBackendSliderBlock } from "types/components/page-blocks/sps-lite";
import Simple from "./Simple";
import { FC } from "react";

export interface ISpsLiteSliderBlock extends ISpsLiteBackendSliderBlock {}

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
