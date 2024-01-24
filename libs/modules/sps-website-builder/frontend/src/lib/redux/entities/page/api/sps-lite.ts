import { createApi } from "@reduxjs/toolkit/query/react";
import {
  transformResponseItem,
  strapiCreate,
  strapiDelete,
  strapiFetchBaseQueryBuilder,
  strapiFind,
  strapiFindOne,
  strapiUpdate,
  BACKEND_URL,
} from "@sps/utils";
import { populate } from "../populate";
import { IEntity } from "../interfaces";

const model = "pages";
const rtkType = "Page";

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

    getById: strapiFindOne<IEntity>({
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

    createPage: strapiCreate<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    updatePage: strapiUpdate<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    deletePage: strapiDelete<IEntity>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
