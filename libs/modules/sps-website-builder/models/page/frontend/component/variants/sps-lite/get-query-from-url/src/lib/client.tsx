"use client";
import "client-only";

import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps } from "./interface";
import { api } from "@sps/sps-website-builder-models-page-frontend-api-client";
import QueryString from "qs";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Client(props: IComponentProps) {
  const params = useSearchParams();
  const query = params.toString();
  const parsedQuery = QueryString.parse(query);

  useEffect(() => {
    if (props.set && typeof props.set === "function") {
      props.set({ data: parsedQuery });
    }
  }, [parsedQuery, props]);

  if (props.children && parsedQuery) {
    return props.children({ data: parsedQuery });
  }

  return <></>;
}
