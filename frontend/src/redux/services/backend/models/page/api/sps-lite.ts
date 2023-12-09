import { createApi } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "~utils/envs";
import {
  strapiCreate,
  strapiDelete,
  strapiFetchBaseQueryBuilder,
  strapiFind,
  strapiFindOne,
  strapiUpdate,
} from "~utils/api/strapi-rtk";
import { IBackendPage } from "../interfaces";
import { populate } from "../populate";
import { transformResponseItem } from "~utils/api/transform-response-item";

const model = "pages";
const rtkType = "Page";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(BACKEND_URL),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    get: strapiFind<IBackendPage>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    getById: strapiFindOne<IBackendPage>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    getByUrl: build.query<IBackendPage, any>({
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

    createPage: strapiCreate<IBackendPage>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    updatePage: strapiUpdate<IBackendPage>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    deletePage: strapiDelete<IBackendPage>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
