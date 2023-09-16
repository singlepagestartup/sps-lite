import { serviceApi } from "../..";
import { IBackendFooter } from "types/collection-types";
import { pageBlockPopulate } from "~utils/api/queries";
import { strapiFindOne } from "~utils/api/strapi-rtk";

const model = "footers";
const rtkType = "Footer";
const populate = pageBlockPopulate;

export const footersApi = serviceApi.injectEndpoints({
  endpoints: (build) => {
    return {
      getFooterById: strapiFindOne<IBackendFooter>({
        serviceApi,
        build,
        populate,
        model,
        rtkType,
      }),
    };
  },
});

export const { useGetFooterByIdQuery } = footersApi;
