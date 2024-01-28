import { createApi } from "@reduxjs/toolkit/query/react";
import {
  transformResponseItem,
  strapiFetchBaseQueryBuilder,
  strapiFind,
  BACKEND_URL,
} from "@sps/utils";
import { populate } from "@sps/sps-website-builder-contracts/lib/entities/layout/populate";
import type { IEntity } from "@sps/sps-website-builder-contracts/lib/entities/layout/interfaces";

const model = "layouts";
const rtkType = "Layout";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(
    `${BACKEND_URL}/api/sps-website-builder`,
  ),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    get: strapiFind<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    getByPageUrl: build.query<IEntity, any>({
      query: (params: any = {}) => {
        const {
          url,
          populate: passedPopulate = populate,
          locale,
          filters,
          pagination,
        } = params;

        return {
          url: `${model}/by-page-url`,
          params: {
            url,
            populate: passedPopulate,
            locale,
            filters,
            pagination,
          },
        };
      },

      transformResponse: (result) => {
        return transformResponseItem(result);
      },

      providesTags: (result: any) => {
        return result?.id
          ? [
              { type: rtkType, id: result.id },
              { type: rtkType, id: "LIST" },
            ]
          : [];
      },
    }),
  }),
});
