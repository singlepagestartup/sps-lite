import { backendServiceApi } from "../..";
import utils from "@rogwild/next-utils";
import { IBackendLayout } from "types/collection-types";
import { layoutPopulate } from "~utils/api/queries";

const model = `layouts`;

export const modalsApi = backendServiceApi.injectEndpoints({
  endpoints: (build) => ({
    getLayouts: build.query({
      query: (params = {}) => {
        const { populate = layoutPopulate, filter } = params;

        return {
          url: model,
          params: {
            populate,
          },
        };
      },

      transformResponse: (result) => {
        return utils.api.transformResponseItem(result) as IBackendLayout[];
      },

      providesTags: (result) => {
        return result?.length
          ? [
              ...result.map(({ id }: { id: number }) => ({
                type: `Layout`,
                id,
              })),
              { type: `Layout`, id: `LIST` },
            ]
          : [{ type: `Layout`, id: `LIST` }];
      },
    }),
  }),
});

export const { useGetLayoutsQuery } = modalsApi;
