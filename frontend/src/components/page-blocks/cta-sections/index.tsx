import { FC } from "react";
import {
  ISpsLiteCtaSectionsBlock,
  variants as spsLiteVariants,
} from "./sps-lite";

const variants = {
  ...spsLiteVariants,
};

export default function CtaSections<T extends ISpsLiteCtaSectionsBlock>(
  props: T,
) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<T>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
