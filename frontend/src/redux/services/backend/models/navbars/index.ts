import { serviceApi } from "../..";
import { IBackendNavbar } from "types/collection-types";
import { pageBlockPopulate } from "~utils/api/queries";
import { strapiFindOne } from "~utils/api/strapi-rtk";

const model = "navbars";
const rtkType = "Navbar";
const populate = pageBlockPopulate;

export const navbarsApi = serviceApi.injectEndpoints({
  endpoints: (build) => ({
    getNavbarById: strapiFindOne<IBackendNavbar>({
      serviceApi,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});

export const { useGetNavbarByIdQuery } = navbarsApi;
