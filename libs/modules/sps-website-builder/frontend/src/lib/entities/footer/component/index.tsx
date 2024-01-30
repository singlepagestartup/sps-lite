"use client";

import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { api as footerApi } from "../api";
import type { IEntity as IBackendFooter } from "@sps/sps-website-builder-contracts-extended/lib/entities/footer/interfaces";
import type { IEntity as IBackendPage } from "@sps/sps-website-builder-contracts-extended/lib/entities/page/interfaces";

export interface IFooter extends IBackendFooter {
  showSkeletons?: boolean;
  page: IBackendPage;
}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export function Entity(props: IFooter) {
  const { data, isLoading, isError, isFetching, isUninitialized } =
    footerApi.useGetFooterByIdQuery({ id: props.id }, { skip: !props.id });

  const Comp = variants[props.variant as keyof typeof variants];

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
