"use client";

import { FC } from "react";
import { ISpsLiteLayout, variants as spsLiteVariants } from "./sps-lite";
import useGetCurrentLayout from "~hooks/use-get-current-layout";

const variants = {
  ...spsLiteVariants,
};

export default function Layouts<T>(props: T) {
  const layout = useGetCurrentLayout();

  const Comp = layout
    ? (variants[layout.variant as keyof typeof variants] as FC<T>)
    : undefined;

  if (!Comp || !layout) {
    return <></>;
  }

  return <Comp {...layout} {...props} />;
}
