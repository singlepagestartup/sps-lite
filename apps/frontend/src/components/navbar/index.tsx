"use client";

import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { api as navbarApi } from "@sps/sps-website-builder-frontend/lib/redux/entities/navbar/api";
import type { IEntity as IBackendNavbar } from "@sps/sps-website-builder-frontend/lib/redux/entities/navbar/interfaces";
import type { IEntity as IBackendTopbar } from "@sps/sps-website-builder-frontend/lib/redux/entities/topbar/interfaces";

export interface INavbar extends IBackendNavbar {
  topbar?: IBackendTopbar | null;
  showSkeletons?: boolean;
  topbarRef: any;
}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export default function Navbar(props: INavbar) {
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
