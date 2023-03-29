import { FC } from "react";
import { IBackendSlider } from "types/models";
import Simple from "./Simple";

export interface ISliderBlock {
  variant: keyof typeof variants;
  anchor?: string;
  slider: IBackendSlider;
}

const variants = {
  simple: Simple,
};

export default function Slider(props: ISliderBlock) {
  const Comp = variants[
    props.variant as keyof typeof variants
  ] as FC<ISliderBlock>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
