"use client";

import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { api as footerApi } from "~redux/services/backend/api/footer/api";
import { IEntity as IBackendFooter } from "~redux/services/backend/api/footer/interfaces";

export interface IFooter extends IBackendFooter {
  showSkeletons?: boolean;
}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export default function Footer(props: IFooter) {
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
