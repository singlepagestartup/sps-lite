"use client";

import { useParams } from "next/navigation";
import { useMemo } from "react";
import { api as pageApi } from "@sps/sps-website-builder-models-page-frontend-api";

export function useGetPageUrlFiltersQuery({
  page,
}: {
  page: {
    id: number;
    url: string;
  };
}) {
  const params: any = useParams();

  const filters = useMemo(() => {
    if (!page) {
      return;
    }

    const pageUrlFilters = pageApi.fetch.getFiltersFromUrl({ page, params }); //?

    return {
      $and: pageUrlFilters,
    };
  }, [page, params]);

  return filters; //?
}
