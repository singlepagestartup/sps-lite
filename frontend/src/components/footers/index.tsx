"use client";

import { FC } from "react";
import { ISpsLiteFooter, variants as spsLiteVariants } from "./sps-lite";
import { useGetFooterByIdQuery } from "~redux/services/backend/models/footers";

const variants = {
  ...spsLiteVariants,
};

export default function Footers<T extends ISpsLiteFooter>(props: T) {
  const { data, isLoading, isError, isFetching, isUninitialized } =
    useGetFooterByIdQuery({ id: props.id }, { skip: !props.id });

  const Comp = variants[props.variant as keyof typeof variants] as FC<T>;

  if (!Comp || isError) {
    return <></>;
  }

  return (
    <Comp
      {...props}
      {...data}
      isLoading={isLoading || isFetching || isUninitialized}
    />
  );
}
