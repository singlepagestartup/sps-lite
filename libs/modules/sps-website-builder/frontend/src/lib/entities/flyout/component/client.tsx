"use client";

import { api } from "../api/client";
import { IComponentProps, variants } from ".";

export function Client(props: IComponentProps) {
  const { data, isLoading, isError, isFetching, isUninitialized } =
    api.useFindOneQuery({ id: props.id }, { skip: !props.id });

  const Comp = variants[props.variant as keyof typeof variants];

  if (!Comp || isError || !data) {
    return <></>;
  }

  return (
    <Comp {...props} {...data}>
      {props.children}
    </Comp>
  );
}
