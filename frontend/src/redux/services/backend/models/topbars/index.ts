import { backendServiceApi } from "../..";
import utils from "@rogwild/next-utils";
import { IBackendNavbar } from "types/collection-types";
import { pageBlockPopulate } from "~utils/api/queries";

const model = "topbars";

export const topbarsApi = backendServiceApi.injectEndpoints({
  endpoints: (build) => ({
    getTopbarById: build.query({
      query: (params = {}) => {
        const { populate = pageBlockPopulate, filters, locale, id } = params;

        return {
          url: `${model}/${id}`,
          params: {
            populate,
            filters,
            locale,
          },
        };
      },

      transformResponse: (result) => {
        return utils.api.transformResponseItem(result) as IBackendNavbar;
      },

      providesTags: (result) => {
        return result?.id
          ? [
              {
                type: "Topbar",
                id: result.id,
              },
            ]
          : [];
      },
    }),
  }),
});

export const { useGetTopbarByIdQuery } = topbarsApi;
