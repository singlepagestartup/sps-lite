import { useParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import { api as pageApi } from "~redux/services/backend/extensions/sps-website-builder/api/page/api";
import { getFiltersFromPageUrl } from "~utils/api";

export default function useGetPageUrlFiltersQuery() {
  const params = useParams();
  const [getByUrl, { data: page }] = pageApi.useLazyGetByUrlQuery();

  useEffect(() => {
    if (params) {
      const passParams = params.url ? params : { ...params, url: "/" }; //?

      getByUrl(passParams);
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
