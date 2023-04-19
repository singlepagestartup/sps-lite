"use client";

import { FC } from "react";
import { ISpsLiteLayout, variants as spsLiteVariants } from "./sps-lite";
import { useGetLayoutsQuery } from "~redux/services/backend/models/layouts";

const variants = {
  ...spsLiteVariants,
};

export default function Layouts(props: any) {
  const { data: layouts } = useGetLayoutsQuery({});

  const Comp = layouts?.length
    ? (variants[layouts[0]?.variant as keyof typeof variants] as FC<any>)
    : undefined;

  if (!Comp || !layouts?.length) {
    return <></>;
  }

  return <Comp {...layouts[0]} {...props} />;
}
