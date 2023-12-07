import { useParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import { useLazyGetTargetPageQuery } from "~redux/services/backend/models/pages";
import { getFiltersFromPageUrl } from "~utils/api";

export default function useGetPageUrlFiltersQuery() {
  const params = useParams();
  const [getTargetPage, { data: page }] = useLazyGetTargetPageQuery();

  useEffect(() => {
    if (params) {
      const passParams = params.url ? params : { ...params, url: "/" }; //?

      getTargetPage(passParams);
    }
  }, [JSON.stringify(params)]);

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
