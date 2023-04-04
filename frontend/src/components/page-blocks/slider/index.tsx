import { FC } from "react";
import { IBackendSliderBlock } from "types/components/page-blocks";
import { spsLiteVariants } from "./sps-lite";

export interface ISliderBlock extends IBackendSliderBlock {}

const variants = {
  ...spsLiteVariants,
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
