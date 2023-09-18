import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { IYourProjectBackendPage } from "types/collection-types/your-project";
import { getFiltersFromPageUrl, getTargetPage } from "~utils/api";

export default function useGetPageUrlFiltersQuery() {
  const params = useParams();
  const [page, setPage] = useState<IYourProjectBackendPage>();

  useEffect(() => {
    if (params) {
      getTargetPage(params).then((res) => {
        setPage(res);
      });
    }
  }, [JSON.stringify(params)]);

  const filters = useMemo(() => {
    if (!page) {
      return;
    }

    const pageUrlFilters = getFiltersFromPageUrl({ page, params });

    return {
      $and: pageUrlFilters,
    };
  }, [page, params]);

  return filters;
}
