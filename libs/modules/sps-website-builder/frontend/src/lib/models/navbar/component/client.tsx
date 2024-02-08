"use client";
import "client-only";

import { api } from "../api/client";
import { IComponentProps } from "./interface";
import { variants } from "./variants";

// default is required for dynamic import
export default function Client(props: IComponentProps) {
  const { data, isLoading, isError, isFetching, isUninitialized } =
    api.useGetByIdQuery({ id: props.id }, { skip: !props.id });

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
