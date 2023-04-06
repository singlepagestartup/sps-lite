import { FC } from "react";
import { variants as spsLiteVariants, ISpsLiteSliderBlock } from "./sps-lite";

const variants = {
  ...spsLiteVariants,
};

export default function Slider<T extends ISpsLiteSliderBlock>(props: T) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<T>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
