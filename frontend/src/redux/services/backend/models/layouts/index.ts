import { serviceApi } from "../..";
import { IBackendLayout } from "types/collection-types";
import { layoutPopulate } from "~utils/api/queries";
import { strapiFind } from "~utils/api/strapi-rtk";
import { transformResponseItem } from "~utils/api/transform-response-item";

const model = "layouts";
const rtkType = "Layout";
const populate = layoutPopulate;

export const layoutsApi = serviceApi.injectEndpoints({
  endpoints: (build) => ({
    getLayouts: strapiFind<IBackendLayout>({
      serviceApi,
      build,
      populate,
      model,
      rtkType,
    }),

    getLayoutByPageUrl: build.query<IBackendLayout, any>({
      query: (params: any = {}) => {
        const {
          url,
          populate = layoutPopulate,
          locale,
          filters,
          pagination,
        } = params;

        return {
          url: `${model}/by-page-url`,
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
  }),
});

export const { useGetLayoutsQuery, useGetLayoutByPageUrlQuery } = layoutsApi;
