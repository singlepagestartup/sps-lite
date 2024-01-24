"use client";

import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { api as sidebarApi } from "~redux/services/backend/extensions/sps-website-builder/api/sidebar/api";
import { IEntity as IBackendSidebar } from "~redux/services/backend/extensions/sps-website-builder/api/sidebar/interfaces";

export interface ISidebar extends IBackendSidebar {
  showSkeletons?: boolean;
}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export default function Sidebar(props: ISidebar) {
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
