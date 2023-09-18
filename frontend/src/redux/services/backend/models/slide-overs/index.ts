import { serviceApi } from "../..";
import { IBackendSlideOver } from "types/collection-types";
import { slideOverPropulate } from "~utils/api/queries";
import { strapiFind } from "~utils/api/strapi-rtk";

const model = "slide-overs";
const rtkType = "SlideOver";
const populate = slideOverPropulate;

export const modalsApi = serviceApi.injectEndpoints({
  endpoints: (build) => ({
    getSlideOvers: strapiFind<IBackendSlideOver>({
      serviceApi,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});

export const { useGetSlideOversQuery } = modalsApi;
