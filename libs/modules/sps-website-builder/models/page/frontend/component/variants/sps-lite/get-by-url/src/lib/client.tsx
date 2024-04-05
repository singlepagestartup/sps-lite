"use client";
import "client-only";

import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps } from "./interface";
import { api } from "@sps/sps-website-builder-models-page-frontend-api-client";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function Client(props: IComponentProps) {
  const params = useParams();

  const { data, isFetching, isLoading, isUninitialized } =
    api.rtk.useGetByUrlQuery({
      url: params.url,
      locale: params.locale,
    });

  useEffect(() => {
    if (data && props.set) {
      props.set(data);
    }
  }, [data]);

  if (isFetching || isLoading || isUninitialized) {
    return <></>;
  }

  if (!data) {
    return <></>;
  }

  if (props?.children) {
    return props.children({ data });
  }

  return <></>;
}
