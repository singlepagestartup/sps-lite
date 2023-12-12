"use client";

import { variants as spsLiteVariants } from "./sps-lite";
import { api as footerApi } from "~redux/services/backend/api/footer/api";
import { IBackendApiEntity as IBackendApiFooter } from "~redux/services/backend/api/footer/interfaces";

export interface IFooter extends IBackendApiFooter {
  showSkeletons?: boolean;
}

const variants = {
  ...spsLiteVariants,
};

export default function Footers(props: IFooter) {
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
