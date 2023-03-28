import { FC } from "react";
import { ISlider } from "~components/slider";
import Simple from "./Simple";

export interface ISliderBlock {
  variant: keyof typeof variants;
  anchor?: string;
  slider: ISlider;
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
