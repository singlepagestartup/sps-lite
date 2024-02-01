"use client";

import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import type { IEntity as IBackendFooter } from "@sps/sps-website-builder-contracts-extended/lib/entities/footer/interfaces";
import { api } from "../api";

export interface IFooter extends IBackendFooter {
  showSkeletons?: boolean;
}

export const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export function Entity(props: IFooter) {
  const { data, isLoading, isError, isFetching, isUninitialized } =
    api.useFindOneQuery({ id: props.id }, { skip: !props.id });

  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

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
