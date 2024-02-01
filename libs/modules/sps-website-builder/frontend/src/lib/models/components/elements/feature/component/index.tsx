"use client";

import { api } from "../api/client";
import { IComponentProps } from "./interface";
import { variants } from "./variants";

export function Component(props: IComponentProps) {
  const { data, isFetching, isLoading, isUninitialized } = api.useFindOneQuery({
    id: props.id,
  });

  const Comp = variants["simple"];

  if (!Comp) {
    return <></>;
  }

  if (isFetching || isLoading || isUninitialized) {
    return <Comp showSkeletons={true} {...props} />;
  }

  return <Comp {...props} {...data} />;
}
