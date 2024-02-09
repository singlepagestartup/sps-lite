"use client";
import "client-only";

import { IComponentProps } from "./interface";
import { api } from "../api/client";
import { variants } from "./variants";

// default is required for dynamic import
export default function Client<T>(props: IComponentProps<T>) {
  let id: number | undefined;
  let variant = props.variant;

  if (props.variant === "list") {
    const { data: carts } = api.useFindQuery({});
    id = carts?.[0]?.id;
    variant = "default";
  } else {
    id = props.id;
  }

  const { data, isFetching, isLoading, isUninitialized } = api.useFindOneQuery({
    id,
  });

  const Comp = variants[variant as keyof typeof variants];

  if (!Comp) {
    return <></>;
  }

  if (isFetching || isLoading || isUninitialized) {
    return <Comp showSkeletons={true} {...(props as any)} />;
  }

  return <Comp {...props} {...(data as any)} />;
}
