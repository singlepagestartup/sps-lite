import { serviceApi } from "../..";
import { IBackendSidebar } from "types/collection-types";
import { pageBlockPopulate } from "~utils/api/queries";
import { strapiFindOne } from "~utils/api/strapi-rtk";

const model = "sidebars";
const rtkType = "Sidebar";
const populate = pageBlockPopulate;

export const sidebarsApi = serviceApi.injectEndpoints({
  endpoints: (build) => ({
    getSidebarById: strapiFindOne<IBackendSidebar>({
      serviceApi,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});

export const { useGetSidebarByIdQuery } = sidebarsApi;
