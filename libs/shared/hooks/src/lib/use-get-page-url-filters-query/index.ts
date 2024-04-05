"use client";

import { useParams } from "next/navigation";
import { useMemo } from "react";

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

    // const pageUrlFilters = pageApi.fetch.getFiltersFromUrl({ page, params }); //?

    return {
      $and: "",
    };
  }, [page, params]);

  return filters; //?
}
