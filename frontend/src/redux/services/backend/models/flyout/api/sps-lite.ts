import { createApi } from "@reduxjs/toolkit/query/react";
import { BACKEND_URL } from "~utils/envs";
import {
  strapiCreate,
  strapiDelete,
  strapiFetchBaseQueryBuilder,
  strapiFind,
  strapiFindOne,
  strapiUpdate,
} from "~redux/strapi-rtk";
import { IBackendFlyout } from "../interfaces";
import { populate } from "../populate";

const model = "flyouts";
const rtkType = "Flyout";

export const api = createApi({
  baseQuery: strapiFetchBaseQueryBuilder(BACKEND_URL),
  tagTypes: [rtkType],
  reducerPath: model,
  endpoints: (build) => ({
    getFlyouts: strapiFind<IBackendFlyout>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    getFlyoutById: strapiFindOne<IBackendFlyout>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    createFlyout: strapiCreate<IBackendFlyout>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    updateFlyout: strapiUpdate<IBackendFlyout>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),

    deleteFlyout: strapiDelete<IBackendFlyout>({
      serviceApi: this,
      build,
      populate,
      model,
      rtkType,
    }),
  }),
});
