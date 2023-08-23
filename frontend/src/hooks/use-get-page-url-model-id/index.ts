import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { IYourProjectBackendPage } from "types/collection-types/your-project";
import { getFiltersFromPageUrl, getTargetPage } from "~utils/api";
import * as R from "ramda";

export default function useGetPageUrlModelId({
  modelName,
}: {
  modelName: string;
}) {
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
    const targetFilter = pageUrlFilters.find(
      (filter) => filter[modelName] !== undefined,
    );

    console.log("🚀 ~ filters ~ targetFilter:", targetFilter);

    if (R.path([modelName, "id", "$in", 0], targetFilter)) {
      return targetFilter[modelName].id["$in"][0];
    }

    return;
  }, [page, params, modelName]);

  return filters;
}
