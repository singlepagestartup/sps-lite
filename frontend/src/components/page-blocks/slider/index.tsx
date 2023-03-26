import { FC, useMemo } from "react";
import { ISlider } from "types";
import Simple from "./Simple";
export interface ISliderBlock {
  variant: `simple`;
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
