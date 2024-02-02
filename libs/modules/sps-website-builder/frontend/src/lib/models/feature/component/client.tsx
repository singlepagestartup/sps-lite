"use client";
import "client-only";

import { api } from "../api/client";
import { IComponentProps } from "./interface";
import { variants } from "./variants";

// default is required for dynamic import
export default function Client(props: IComponentProps) {
  const { data, isFetching, isLoading, isUninitialized } = api.useFindOneQuery({
    id: props.id,
  });

  const Comp = variants["simple"];

  if (!Comp) {
    return <></>;
  }

  if (!data || isFetching || isLoading || isUninitialized) {
    return <Comp showSkeletons={true} {...props} />;
  }

  return <Comp {...props} {...data} />;
}
