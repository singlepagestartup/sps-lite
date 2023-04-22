import { backendServiceApi } from "../..";
import utils from "@rogwild/next-utils";
import { IBackendNavbar } from "types/collection-types";
import { pageBlockPopulate } from "~utils/api/queries";

const model = "sidebars";

export const sidebarsApi = backendServiceApi.injectEndpoints({
  endpoints: (build) => ({
    getSidebarById: build.query({
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
                type: "Sidebar",
                id: result.id,
              },
            ]
          : [];
      },
    }),
  }),
});

export const { useGetSidebarByIdQuery } = sidebarsApi;
