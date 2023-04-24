"use client";

import { FC } from "react";
import { ISpsLiteTopbar, variants as spsLiteVariants } from "./sps-lite";
import { useGetTopbarByIdQuery } from "~redux/services/backend/models/topbars";

const variants = {
  ...spsLiteVariants,
};

export default function PublicPageTopbars<T extends ISpsLiteTopbar>(props: T) {
  const { data, isLoading, isError, isFetching, isUninitialized } =
    useGetTopbarByIdQuery({ id: props.id }, { skip: !props.id });

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
