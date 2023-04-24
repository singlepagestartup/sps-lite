"use client";

import { FC } from "react";
import { ISpsLiteSidebar, variants as spsLiteVariants } from "./sps-lite";
import { useGetSidebarByIdQuery } from "~redux/services/backend/models/sidebars";

const variants = {
  ...spsLiteVariants,
};

export default function Sidebars<T extends ISpsLiteSidebar>(props: T) {
  const { data, isLoading, isError, isFetching, isUninitialized } =
    useGetSidebarByIdQuery({ id: props.id }, { skip: !props.id });

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
