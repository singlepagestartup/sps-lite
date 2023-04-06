import { FC } from "react";
import {
  ISpsLitePublicPageNavbarBlock,
  variants as spsLiteVariants,
} from "./sps-lite";

const variants = {
  ...spsLiteVariants,
};

export default function PublicPageNavbars<
  T extends ISpsLitePublicPageNavbarBlock
>(props: T) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<T>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
