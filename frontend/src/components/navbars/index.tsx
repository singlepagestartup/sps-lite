"use client";

import { FC } from "react";
import { ISpsLiteNavbar, variants as spsLiteVariants } from "./sps-lite";
import { api as navbarApi } from "~redux/services/backend/api/navbar/api";

const variants = {
  ...spsLiteVariants,
};

export default function Navbars<T extends ISpsLiteNavbar>(props: any) {
  const {
    data: backendNavbar,
    isLoading,
    isError,
    isFetching,
    isUninitialized,
  } = navbarApi.useGetByIdQuery({ id: props.id }, { skip: !props.id });

  const Comp = variants[props.variant as keyof typeof variants] as FC<T>;

  if (!Comp || isError) {
    return <></>;
  }

  return (
    <Comp
      {...props}
      {...backendNavbar}
      showSkeletons={isLoading || isFetching || isUninitialized}
    />
  );
}
