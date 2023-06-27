"use client";

import { FC } from "react";
import { ISpsLiteLoaderBlock, variants as spsLiteVariants } from "./sps-lite";

const variants = {
  ...spsLiteVariants,
};

export default function Loaders<T extends ISpsLiteLoaderBlock>(props: T) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<T>;

  if (!Comp) {
    return <>{props.children}</>;
  }

  return <Comp {...props} />;
}
