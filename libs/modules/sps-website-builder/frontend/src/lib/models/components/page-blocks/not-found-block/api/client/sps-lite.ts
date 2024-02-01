import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk, BACKEND_URL } from "@sps/utils";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/components/page-blocks/not-found-block/populate";
import type { IComponent } from "@sps/sps-website-builder-contracts-extended/lib/components/page-blocks/not-found-block/interfaces";

const model = "components/page-blocks.not-found-block";
const rtkType = "NotFoundBlock";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(
    `${BACKEND_URL}/api/sps-website-builder`,
  ),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    findOne: rtk.api.findOne<IComponent>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
