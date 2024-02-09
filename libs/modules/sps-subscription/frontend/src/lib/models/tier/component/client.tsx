"use client";
import "client-only";

import { IComponentProps, IComponentPropsExtended } from "./interface";
import { api } from "../api/client";
import { variants } from "./variants";

// default is required for dynamic import
export default function Client<T>(props: IComponentProps<T>) {
  const Comp = variants[props.variant as keyof typeof variants];

  if (props.variant === "list") {
    const { data, isFetching, isLoading, isUninitialized } = api.useFindQuery(
      {},
    );

    const Comp = variants["list"];

    if (isFetching || isLoading || isUninitialized || !data) {
      return (
        <Comp
          showSkeletons={true}
          {...(props as IComponentProps<{ variant: "list" }>)}
        />
      );
    }

    return (
      <Comp
        {...(props as IComponentPropsExtended<{ variant: "list" }>)}
        list={data}
      />
    );
  }

  const { data, isFetching, isLoading, isUninitialized } = api.useFindOneQuery({
    id: props.id,
  });

  if (!Comp) {
    return <></>;
  }

  if (isFetching || isLoading || isUninitialized) {
    return <Comp showSkeletons={true} {...(props as any)} />;
  }

  return <Comp {...(props as any)} {...(data as any)} />;
}
