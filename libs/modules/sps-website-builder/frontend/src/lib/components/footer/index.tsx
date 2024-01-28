"use client";

import { variants as spsLiteVariants } from "./sps-lite";
import { variants as startupVariants } from "./startup";
import { api as footerApi } from "../../redux/entities/footer";
import type { IEntity as IBackendFooter } from "../../redux/entities/footer/interfaces";
import type { IEntity as IBackendPage } from "../../redux/entities/page/interfaces";

export interface IFooter extends IBackendFooter {
  showSkeletons?: boolean;
  page: IBackendPage;
}

const variants = {
  ...spsLiteVariants,
  ...startupVariants,
};

export function Footer(props: IFooter) {
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

export default Footer;
