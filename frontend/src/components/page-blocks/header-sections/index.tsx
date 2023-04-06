import { FC } from "react";
import {
  ISpsLiteHeaderSectionBlock,
  variants as spsLiteVariants,
} from "./sps-lite";

const variants = {
  ...spsLiteVariants,
};

export default function HeaderSections<T extends ISpsLiteHeaderSectionBlock>(
  props: T
) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<T>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
