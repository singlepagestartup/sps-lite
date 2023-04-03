import { FC } from "react";
import Simple from "./Simple";
import { IBackendSliderBlock } from "types/components/page-blocks";

export interface ISliderBlock extends IBackendSliderBlock {}

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
