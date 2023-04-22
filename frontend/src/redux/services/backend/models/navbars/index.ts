import { backendServiceApi } from "../..";
import utils from "@rogwild/next-utils";
import { IBackendNavbar } from "types/collection-types";
import { pageBlockPopulate } from "~utils/api/queries";

const model = "navbars";

export const navbarsApi = backendServiceApi.injectEndpoints({
  endpoints: (build) => ({
    getNavbarById: build.query({
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
