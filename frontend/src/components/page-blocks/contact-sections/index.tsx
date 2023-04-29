import { FC } from "react";
import {
  ISpsLiteContactSectonBlock,
  variants as spsLiteVariants,
} from "./sps-lite";

const variants = {
  ...spsLiteVariants,
};

export default function ContactSectons<T extends ISpsLiteContactSectonBlock>(
  props: T,
) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<T>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
