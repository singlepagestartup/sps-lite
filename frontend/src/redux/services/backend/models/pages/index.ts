import { IBackendPage } from "types/collection-types";
import { serviceApi } from "../..";
import { pageBlockPopulate } from "~utils/api/queries";
import {
  strapiCreate,
  strapiDelete,
  strapiFind,
  strapiFindOne,
  strapiUpdate,
} from "~utils/api/strapi-rtk";
import { transformResponseItem } from "~utils/api/transform-response-item";

const model = "pages";
const populate = pageBlockPopulate;
const rtkType = "Page";

export const pagesApi = serviceApi.injectEndpoints({
  endpoints: (build) => ({
    getPages: strapiFind<IBackendPage>({
      serviceApi,
      build,
      populate,
      model,
      rtkType,
    }),

    getPageById: strapiFindOne<IBackendPage>({
      serviceApi,
      build,
      populate,
      model,
      rtkType,
    }),

    getTargetPage: build.query<IBackendPage, any>({
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
      serviceApi,
      build,
      populate,
      model,
      rtkType,
    }),

    updatePage: strapiUpdate<IBackendPage>({
      serviceApi,
      build,
      populate,
      model,
      rtkType,
    }),

    deletePage: strapiDelete<IBackendPage>({
      serviceApi,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});

export const {
  useGetPagesQuery,
  useGetPageByIdQuery,
  useGetTargetPageQuery,
  useLazyGetTargetPageQuery,
  useCreatePageMutation,
  useUpdatePageMutation,
  useDeletePageMutation,
} = pagesApi;
