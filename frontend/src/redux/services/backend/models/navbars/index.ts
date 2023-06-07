import { frontendServiceApi } from "../..";
import { IBackendNavbar } from "types/collection-types";
import { pageBlockPopulate } from "~utils/api/queries";
import { transformResponseItem } from "~utils/api/transform-response-item";

const model = "navbars";

export const navbarsApi = frontendServiceApi.injectEndpoints({
  endpoints: (build) => ({
    getNavbarById: build.query({
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
                type: "Navbar",
                id: result.id,
              },
            ]
          : [];
      },
    }),
  }),
});

export const { useGetNavbarByIdQuery } = navbarsApi;
