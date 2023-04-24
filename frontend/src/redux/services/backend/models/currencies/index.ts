import { backendServiceApi } from "../..";
import { IBackendCurrency } from "types/collection-types";
import { currencyPopulate } from "~utils/api/queries";
import { transformResponseItem } from "~utils/api/transform-response-item";

const model = "currencies";

export const categoriesApi = backendServiceApi.injectEndpoints({
  endpoints: (build) => ({
    getCurrencies: build.query({
      query: (params = {}) => {
        const { populate = currencyPopulate, filters } = params;

        return {
          url: model,
          params: {
            populate,
            filters,
          },
        };
      },

      transformResponse: (result) => {
        return transformResponseItem(
          result
        ) as TransformedApiArray<IBackendCurrency>;
      },

      providesTags: (result) => {
        return result?.length
          ? [
              ...result.map(({ id }: { id: number }) => ({
                type: "Currency",
                id,
              })),
              { type: "Currency", id: "LIST" },
            ]
          : [{ type: "Currency", id: "LIST" }];
      },
    }),
  }),
});

export const { useGetCurrenciesQuery } = categoriesApi;
