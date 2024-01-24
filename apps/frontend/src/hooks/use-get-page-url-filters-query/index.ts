import { useParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import { api as pageApi } from "@sps/sps-website-builder/lib/redux/services/api/page/api";
import { getFiltersFromPageUrl } from "@sps/utils";

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
