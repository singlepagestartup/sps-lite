import { serviceApi } from "../..";
import { IBackendSidebar } from "types/collection-types";
import { pageBlockPopulate } from "~utils/api/queries";
import { strapiFind } from "~utils/api/strapi-rtk";

const model = "sidebars";
const rtkType = "Sidebar";
const populate = pageBlockPopulate;

export const sidebarsApi = serviceApi.injectEndpoints({
  endpoints: (build) => ({
    getSidebarById: strapiFind<IBackendSidebar>({
      serviceApi,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});

export const { useGetSidebarByIdQuery } = sidebarsApi;
