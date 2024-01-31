"use client";

import { api as footerApi } from "../api/client";
import { IFooter, variants } from ".";

export function Client(props: IFooter) {
  const { data, isLoading, isError, isFetching, isUninitialized } =
    footerApi.useFindOneQuery({ id: props.id }, { skip: !props.id });

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
