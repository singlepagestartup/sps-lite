"use client";

import { api } from "../api";
import { IComponentProps } from "./interface";
import { variants } from "./variants";

export function Component(props: IComponentProps) {
  const { data, isLoading, isError, isFetching, isUninitialized } =
    api.useFindOneQuery({ id: props.id }, { skip: !props.id });

  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp || isError || !data) {
    return <></>;
  }

  return <Comp {...props} {...data} />;
}
