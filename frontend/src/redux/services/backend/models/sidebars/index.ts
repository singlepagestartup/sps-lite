import { frontendServiceApi } from "../..";
import { IBackendNavbar } from "types/collection-types";
import { pageBlockPopulate } from "~utils/api/queries";
import { transformResponseItem } from "~utils/api/transform-response-item";

const model = "sidebars";

export const sidebarsApi = frontendServiceApi.injectEndpoints({
  endpoints: (build) => ({
    getSidebarById: build.query({
      query: (params = {}) => {
        const { populate = pageBlockPopulate, filters, locale, id } = params;

        return {
          url: `${model}/${id}.json`,
          params: {
            populate,
            filters,
            locale,
          },
        };
      },

      transformResponse: (result) => {
        return transformResponseItem(result) as IBackendNavbar;
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
