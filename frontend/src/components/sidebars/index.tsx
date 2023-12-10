"use client";

import { FC } from "react";
import { ISpsLiteSidebar, variants as spsLiteVariants } from "./sps-lite";
import { api as sidebarApi } from "~redux/services/backend/api/sidebar/api";

const variants = {
  ...spsLiteVariants,
};

export default function Sidebars<T extends ISpsLiteSidebar>(props: any) {
  const { data, isLoading, isError, isFetching, isUninitialized } =
    sidebarApi.useGetByIdQuery({ id: props.id }, { skip: !props.id });

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
