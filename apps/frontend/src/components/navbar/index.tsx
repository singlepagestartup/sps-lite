"use client";

import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { api as navbarApi } from "~redux/services/backend/extensions/sps-website-builder/api/navbar/api";
import { IEntity as IBackendNavbar } from "~redux/services/backend/extensions/sps-website-builder/api/navbar/interfaces";
import { IEntity as IBackendTopbar } from "~redux/services/backend/extensions/sps-website-builder/api/topbar/interfaces";

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
