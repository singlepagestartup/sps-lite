import { createApi } from "@reduxjs/toolkit/query/react";
import { rtk, BACKEND_URL } from "@sps/utils";
import { IEntity } from "@sps/sps-website-builder-contracts-extended/lib/entities/slider/interfaces";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/entities/slider/populate";

const model = "sliders";
const rtkType = "Slider";

export const api = createApi({
  baseQuery: rtk.api.fetchBaseQueryBuilder(
    `${BACKEND_URL}/api/sps-website-builder`,
  ),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    getById: rtk.api.findOne<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
