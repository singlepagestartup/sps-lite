"use client";

import { IElement, variants } from ".";
import { api } from "../api/client";

export function Client(props: IElement) {
  const { data, isFetching, isLoading, isUninitialized } = api.useFindOneQuery({
    id: props.id,
  });

  const Comp = variants[props.variant as keyof typeof variants];

  if (isFetching || isLoading || isUninitialized) {
    return <Comp showSkeletons={true} {...props} />;
  }

  return <Comp {...props} {...data} />;
}
