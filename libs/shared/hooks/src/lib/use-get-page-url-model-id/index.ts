"use client";

import { useParams } from "next/navigation";
import { useMemo } from "react";
const R = require("ramda");

export function useGetPageUrlModelId({
  modelName,
  page,
}: {
  modelName: string;
  page: {
    id: number;
    url: string;
  };
}) {
  const params: any = useParams(); //?
  const filters = useMemo(() => {
    if (!page) {
      return;
    }

    // const pageUrlFilters = pageApi.fetch.getFiltersFromUrl({ page, params });
    const pageUrlFilters = [];
    const targetFilter = pageUrlFilters.find(
      (filter) => filter[modelName] !== undefined,
    );

    // if (R.path([modelName, "id", "$in", 0], targetFilter)) {
    //   return targetFilter[modelName].id["$in"][0];
    // }

    return;
  }, [page, params, modelName]);

  return filters;
}
