import { serviceApi } from "../..";
import { IBackendTopbar } from "types/collection-types";
import { pageBlockPopulate } from "~utils/api/queries";
import { strapiFindOne } from "~utils/api/strapi-rtk";

const model = "topbars";
const rtkType = "Topbar";
const populate = pageBlockPopulate;

export const topbarsApi = serviceApi.injectEndpoints({
  endpoints: (build) => ({
    getTopbarById: strapiFindOne<IBackendTopbar>({
      serviceApi,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});

export const { useGetTopbarByIdQuery } = topbarsApi;
