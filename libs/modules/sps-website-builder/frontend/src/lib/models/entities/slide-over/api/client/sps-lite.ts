import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk, BACKEND_URL } from "@sps/utils";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/entities/slide-over/populate";
import type { IEntity } from "@sps/sps-website-builder-contracts-extended/lib/entities/slide-over/interfaces";

const model = "slide-overs";
const rtkType = "SlideOver";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(
    `${BACKEND_URL}/api/sps-website-builder`,
  ),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    get: rtk.api.find<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
