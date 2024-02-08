"use client";
import "client-only";

import { IComponentProps } from "./interface";
import { api } from "../api/client";
import { variants } from "./variants";

// default is required for dynamic import
export default function Client<T>(props: IComponentProps<T>) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (props.variant === "list") {
    const { data, isFetching, isLoading, isUninitialized } = api.useFindQuery(
      {},
    );

    if (isFetching || isLoading || isUninitialized) {
      return <Comp showSkeletons={true} {...props} />;
    }

    return <Comp {...props} list={data} />;
  }

  const { data, isFetching, isLoading, isUninitialized } = api.useFindOneQuery({
    id: props.id,
  });

  if (!Comp) {
    return <></>;
  }

  if (isFetching || isLoading || isUninitialized) {
    return <Comp showSkeletons={true} {...props} />;
  }

  return <Comp {...props} {...data} />;
}
