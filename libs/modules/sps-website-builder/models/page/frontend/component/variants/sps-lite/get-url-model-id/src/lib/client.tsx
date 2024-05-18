"use client";
import "client-only";

import { Component } from "./Component";
import { ErrorBoundary } from "@sps/ui-adapter";
import { Skeleton } from "./Skeleton";
import { Error } from "./Error";
import { IComponentProps } from "./interface";
import { api } from "@sps/sps-website-builder-models-page-frontend-api-client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Client(props: IComponentProps) {
  const params = useParams();
  const [localId, setLocalId] = useState<string | undefined>();

  const { data, isFetching, isLoading, isUninitialized } =
    api.rtk.useGetByUrlQuery({
      url: Array.isArray(params.url) ? "/" + params.url.join("/") : params.url,
      locale: params.locale,
    });

  useEffect(() => {
    if (data) {
      const filters = getFiltersFromUrl({
        page: data,
        params: { url: params.url, locale: params.locale },
      });

      const targetFilter = filters.find(
        (filter) => filter[props.model] !== undefined,
      );

      const id = targetFilter?.[props.model];

      if (id) {
        setLocalId(id);
      }
    }
  }, [data]);

  useEffect(() => {
    if (localId && props.set) {
      props.set(localId);
    }
  }, [localId]);

  if (!data && props.children) {
    return props.children({ data: undefined });
  }

  if (props?.children && localId) {
    return props.children({ data: localId });
  }

  return <></>;
}

interface Params {
  url?: string | string[];
  locale: string | string[];
}

function getFiltersFromUrl({
  page,
  params,
}: {
  page: {
    id: string;
    url: string;
  };
  params: Params;
}): any[] {
  const splittedParams = Array.isArray(params.url)
    ? params.url
    : params.url?.split("/").filter((u: string) => u !== "");

  if (!page.id) {
    return [];
  }

  const filters: any[] = [];

  const urlSegments = page.url?.split("/").filter((u: string) => u !== "");

  for (const [index, urlSegment] of urlSegments.entries()) {
    if (urlSegment.includes(".") && splittedParams && splittedParams[index]) {
      const sanitizedUrlSegment = urlSegment
        .replaceAll("[", "")
        .replaceAll("]", "");

      const filter = {
        [sanitizedUrlSegment]: splittedParams[index],
      };

      filters.push(filter);
    }
  }

  return filters;
}
