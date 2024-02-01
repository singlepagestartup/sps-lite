"use client";

import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { api as navbarApi } from "../api";
import type { IEntity as IBackendNavbar } from "@sps/sps-website-builder-contracts-extended/lib/entities/navbar/interfaces";

export interface INavbar extends IBackendNavbar {
  showSkeletons?: boolean;
}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export function Entity(props: INavbar) {
  const {
    data: backendNavbar,
    isLoading,
    isError,
    isFetching,
    isUninitialized,
  } = navbarApi.useGetByIdQuery({ id: props.id }, { skip: !props.id });

  const Comp = variants[props.variant as keyof typeof variants];

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
