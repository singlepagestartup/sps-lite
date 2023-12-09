"use client";

import { FC } from "react";
import { ISpsLiteTopbar, variants as spsLiteVariants } from "./sps-lite";
import { api as topbarApi } from "~redux/services/backend/models/topbar/api";

const variants = {
  ...spsLiteVariants,
};

export default function PublicPageTopbars<T extends ISpsLiteTopbar>(
  props: any,
) {
  const { data, isLoading, isError, isFetching, isUninitialized } =
    topbarApi.useGetByIdQuery({ id: props.id }, { skip: !props.id });

  const Comp = variants[props.variant as keyof typeof variants] as FC<T>;

  if (!Comp || isError) {
    return <></>;
  }

  return (
    <Comp
      {...props}
      {...data}
      showSkeletons={isLoading || isFetching || isUninitialized}
    />
  );
}
