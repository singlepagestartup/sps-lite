"use client";

import { variants as spsLiteVariants } from "./sps-lite";
import { api as navbarApi } from "~redux/services/backend/api/navbar/api";
import { IBackendApiEntity as IBackendApiNavbar } from "~redux/services/backend/api/navbar/interfaces";
import { IBackendApiEntity as IBackendApiTopbar } from "~redux/services/backend/api/topbar/interfaces";

export interface INavbar extends IBackendApiNavbar {
  topbar?: IBackendApiTopbar | null;
  showSkeletons?: boolean;
  topbarRef: any;
}

const variants = {
  ...spsLiteVariants,
};

export default function Navbars(props: INavbar) {
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
