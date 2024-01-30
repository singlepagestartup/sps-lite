"use client";

import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { api as sidebarApi } from "../api";
import type { IEntity as IBackendSidebar } from "../../redux/entities/sidebar/interfaces";
import type { IEntity as IBackendPage } from "../../redux/entities/page/interfaces";

export interface ISidebar extends IBackendSidebar {
  showSkeletons?: boolean;
  page: IBackendPage;
}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export function Sidebar(props: ISidebar) {
  const { data, isLoading, isError, isFetching, isUninitialized } =
    sidebarApi.useGetByIdQuery({ id: props.id }, { skip: !props.id });

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
