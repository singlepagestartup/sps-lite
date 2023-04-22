"use client";

import { FC, ReactNode } from "react";
import { ISpsLiteLayout, variants as spsLiteVariants } from "./sps-lite";
import useGetCurrentLayout from "~hooks/use-get-current-layout";
import { IBackendLayout } from "types/collection-types";

const variants = {
  ...spsLiteVariants,
};

export default function Layouts({
  children,
  layouts,
}: {
  children?: ReactNode;
  layouts: IBackendLayout[];
}) {
  const layout = useGetCurrentLayout({ layouts });

  const Comp = layout
    ? (variants[layout.variant as keyof typeof variants] as FC<ISpsLiteLayout>)
    : undefined;

  if (!Comp || !layout) {
    return <></>;
  }

  return <Comp {...layout}>{children}</Comp>;
}
