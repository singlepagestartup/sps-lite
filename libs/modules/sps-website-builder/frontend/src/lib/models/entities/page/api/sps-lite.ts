import { createApi } from "@reduxjs/toolkit/query/react";
import { transformResponseItem, rtk, BACKEND_URL } from "@sps/utils";
import { populate } from "@sps/sps-website-builder-contracts-extended/lib/entities/page/populate";
import type { IEntity } from "@sps/sps-website-builder-contracts-extended/lib/entities/page/interfaces";

const model = "pages";
const rtkType = "Page";

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

    getById: rtk.api.findOne<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    getByUrl: build.query<IEntity, any>({
      query: (params: any = {}) => {
        const { populate, locale, filters, pagination, url } = params;

        return {
          url: `${model}/get-by-url`,
          params: {
            url,
            populate,
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

    createPage: rtk.api.create<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    updatePage: rtk.api.update<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    deletePage: rtk.api.delete<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
