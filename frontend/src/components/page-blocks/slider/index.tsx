import { FC, useMemo } from "react";
import { ILogoCloud, ISlider, ISliderBlock } from "types";
import Simple from "./Simple";

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
