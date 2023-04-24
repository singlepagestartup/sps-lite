import { backendServiceApi } from "../..";
import { IBackendLayout } from "types/collection-types";
import { layoutPopulate } from "~utils/api/queries";
import { transformResponseItem } from "~utils/api/transform-response-item";

const model = "layouts";

export const layoutsApi = backendServiceApi.injectEndpoints({
  endpoints: (build) => ({
    getLayouts: build.query({
      query: (params = {}) => {
        const {
          populate = layoutPopulate,
          filters,
          locale,
          pagination = { limit: -1 },
        } = params;

        return {
          url: model,
          params: {
            populate,
            filters,
            locale,
            pagination,
          },
        };
      },

      transformResponse: (result) => {
        return transformResponseItem(
          result
        ) as TransformedApiArray<IBackendLayout>;
      },

      providesTags: (result) => {
        return result?.length
          ? [
              ...result.map(({ id }: { id: number }) => ({
                type: "Layout",
                id,
              })),
              { type: "Layout", id: "LIST" },
            ]
          : [{ type: "Layout", id: "LIST" }];
      },
    }),
  }),
});

export const { useGetLayoutsQuery } = layoutsApi;
