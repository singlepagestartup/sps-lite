import { FC } from "react";
import {
  ISpsLitePublicPageFooterBlock,
  variants as spsLiteVariants,
} from "./sps-lite";

const variants = {
  ...spsLiteVariants,
};

export default function PublicPageFooters<
  T extends ISpsLitePublicPageFooterBlock
>(props: T) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<T>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
