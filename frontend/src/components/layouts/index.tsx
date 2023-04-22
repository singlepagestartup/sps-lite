"use client";

import { FC, ReactNode } from "react";
import { ISpsLiteLayout, variants as spsLiteVariants } from "./sps-lite";
import useGetCurrentLayout from "~hooks/use-get-current-layout";

const variants = {
  ...spsLiteVariants,
};

export default function Layouts({ children }: { children: ReactNode }) {
  const layout = useGetCurrentLayout();

  const Comp = layout
    ? (variants[layout.variant as keyof typeof variants] as FC<ISpsLiteLayout>)
    : undefined;

  if (!Comp || !layout) {
    return <></>;
  }

  return <Comp {...layout}>{children}</Comp>;
}
