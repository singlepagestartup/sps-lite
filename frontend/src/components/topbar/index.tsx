"use client";

import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { api as topbarApi } from "~redux/services/backend/extensions/sps-website-builder/api/topbar/api";
import { IEntity as IBackendTopbar } from "~redux/services/backend/extensions/sps-website-builder/api/topbar/interfaces";

export interface ITopbar extends IBackendTopbar {
  showSkeletons?: boolean;
  topbarRef?: any;
}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export default function Topbar(props: ITopbar) {
  const { data, isLoading, isError, isFetching, isUninitialized } =
    topbarApi.useGetByIdQuery({ id: props.id }, { skip: !props.id });

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
