"use client";

import { useParams } from "next/navigation";
import { useMemo } from "react";
import { getFiltersFromPageUrl } from "@sps/utils";

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

    const pageUrlFilters = getFiltersFromPageUrl({ page, params }); //?

    return {
      $and: pageUrlFilters,
    };
  }, [page, params]);

  return filters; //?
}
