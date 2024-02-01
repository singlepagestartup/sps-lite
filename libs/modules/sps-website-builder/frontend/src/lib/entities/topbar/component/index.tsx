"use client";

import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { api as topbarApi } from "../api";
import type { IEntity as IBackendTopbar } from "@sps/sps-website-builder-contracts-extended/lib/entities/topbar/interfaces";
import type { IEntity as IBackendPage } from "@sps/sps-website-builder-contracts-extended/lib/entities/page/interfaces";

export interface ITopbar extends IBackendTopbar {
  showSkeletons?: boolean;
  topbarRef?: any;
  page: IBackendPage;
}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export function Component(props: ITopbar) {
  return <></>;
  // const { data, isLoading, isError, isFetching, isUninitialized } =
  //   topbarApi.useGetByIdQuery({ id: props.id }, { skip: !props.id });

  // const Comp = variants[props.variant as keyof typeof variants];

  // if (!Comp || isError) {
  //   return <></>;
  // }

  // return (
  //   <Comp
  //     {...props}
  //     {...data}
  //     showSkeletons={isLoading || isFetching || isUninitialized}
  //   />
  // );
}
