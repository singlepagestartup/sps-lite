import { backendServiceApi } from "../..";
import utils from "@rogwild/next-utils";
import { ICurrency } from "types";

const currenciesPopulate = {
  products: `*`,
};

const model = `currencies`;

export const categoriesApi = backendServiceApi.injectEndpoints({
  endpoints: (build) => ({
    getCurrencies: build.query({
      query: (params = {}) => {
        const { populate = currenciesPopulate, filters } = params;

        return {
          url: model,
          params: {
            populate,
            filters,
          },
        };
      },

      transformResponse: (result) => {
        return utils.api.transformResponseItem(result) as ICurrency[];
      },

      providesTags: (result) => {
        return result?.length
          ? [
              ...result.map(({ id }: { id: number }) => ({
                type: `Currency`,
                id,
              })),
              { type: `Currency`, id: `LIST` },
            ]
          : [{ type: `Currency`, id: `LIST` }];
      },
    }),
  }),
});

export const { useGetCurrenciesQuery } = categoriesApi;
