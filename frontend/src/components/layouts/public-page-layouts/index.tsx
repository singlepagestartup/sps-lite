import { FC } from "react";
import {
  ISpsLitePublicPageLayoutBlock,
  variants as spsLiteVariants,
} from "./sps-lite";

const variants = {
  ...spsLiteVariants,
};

export default function PublicPageLayouts<
  T extends ISpsLitePublicPageLayoutBlock
>(props: T) {
  const Comp = variants[
    props.publicPageLayout?.variant as keyof typeof variants
  ] as FC<T>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
