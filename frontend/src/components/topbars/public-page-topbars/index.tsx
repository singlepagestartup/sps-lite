import { FC } from "react";
import { IBackendPublicPageTopbar } from "types/single-types";
import {
  ISpsLitePublicPageTopbarBlock,
  variants as spsLiteVariants,
} from "./sps-lite";

export interface IBackendPublicPageBlock extends IBackendPublicPageTopbar {}

const variants = {
  ...spsLiteVariants,
};

export default function PublicPageTopbars<
  T extends ISpsLitePublicPageTopbarBlock
>(props: T) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<T>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
