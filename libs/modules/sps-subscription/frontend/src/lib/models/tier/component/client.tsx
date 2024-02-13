"use client";
import "client-only";

import { IComponentProps as IFindOneComponentProps } from "./find-one/interface";
import { IComponentProps as IFindManyComponentProps } from "./find-many/interface";
import { api } from "../api/client";
import { variants } from "./variants";

// default is required for dynamic import
export default function Client(
  props: IFindOneComponentProps | IFindManyComponentProps,
) {
  if (props.variant === "list") {
    return <FindMany {...props} />;
  }

  const Comp = variants.findOne[props.variant];

  const { data, isFetching, isLoading, isUninitialized } = api.useFindOneQuery({
    id: props.data.id,
  });

  if (!Comp) {
    return <></>;
  }

  if (isFetching || isLoading || isUninitialized || !data) {
    return <Comp showSkeletons={true} {...props} />;
  }

  return <Comp {...props} data={data} />;
}

function FindMany(props: IFindManyComponentProps) {
  const Comp = variants.findMany[props.variant];

  const { data, isFetching, isLoading, isUninitialized } = api.useFindQuery({});

  if (isFetching || isLoading || isUninitialized || !data) {
    return <Comp showSkeletons={true} {...props} />;
  }

  return <Comp {...props} data={data} />;
}
