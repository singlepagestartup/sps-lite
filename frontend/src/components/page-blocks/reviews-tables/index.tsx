"use client";

import { FC } from "react";
import {
  ISpsLiteReviewsTableBlock,
  variants as spsLiteVariants,
} from "./sps-lite";

const variants = {
  ...spsLiteVariants,
};

export default function ReviewsTables<T extends ISpsLiteReviewsTableBlock>(
  props: T,
) {
  const Comp = variants[props.variant as keyof typeof variants] as FC<T>;

  if (!Comp) {
    return <></>;
  }

  return <Comp {...props} />;
}
